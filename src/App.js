import { useEffect, useState } from "react";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Header from "./components/Header";
import ListCard from "./components/ListCards";
import RowPoint from "./components/RowPoint";
import api from "./service";
import { levels } from "./util/variabeles";
import { getRndInteger, filterLevels, showMessage } from "./util/functions";
import { Divider } from "@mui/material";

function App() {
  //States
  const [isOpenWelcome, setIsWelcome] = useState(true);
  const [isOpenAbout, setIsOpenAbout] = useState(false);
  const [qtdClicks, setQtdClicks] = useState(0);
  const [totPoint, setTotPoint] = useState(0);
  const [nameUser, setNameUser] = useState("");
  const [listDigimons, setListDigimons] = useState([]);
  const [selectDigimons, setSelectDigimons] = useState([]);

  //Embalhar arry
  const shuffle = (array) => {
    let m = array.length,
      t,
      i;

    // Enquanto restam elementos para embaralhar
    while (m) {
      // Escolha um elemento aleatório restante…
      i = Math.floor(Math.random() * m--);

      // E troque-o com o elemento atual.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  };

  //trata o campo point da const: levels
  const getPoint = (point = []) => {
    let result = -1;

    //se o point tiver mais de 1 item
    if (point.length > 1) {
      //gere um numero entre a posição 0 e 1
      result = getRndInteger(point[0], point[1]);
    } else {
      //se não pegue só a primeira posição
      result = point[0];
    }

    return result;
  };

  //Busca os pontos corretos pertencente ao seu level
  const onPoint = (typeLevel = "") => {
    const level = filterLevels(levels, typeLevel);

    return level.length > 0 ? getPoint(level[0].point) : -1;
  };

  // Busca as Lista de Digimons
  const onGetDigimons = async () => {
    //consulta GET
    const res = await api.get("/digimon");
    //resultado da consulta
    const cardsDigimon = shuffle(res.data);
    //alocando no State
    setListDigimons(cardsDigimon);
    //console.log(cardsDigimon);
  };

  //Primeira busca com 5 cartas
  const onFirstListCard = () => {
    //Arry cards Novos
    let cardArr = [];
    //Quantidade de Digimons totais
    const qtdTot = listDigimons.length;

    for (let index = 0; index < 5; index++) {
      //Posição aleatoria
      const position = getRndInteger(index, qtdTot);
      const info = listDigimons[position];

      //Adicionando uma nova carta na lista
      cardArr.push({ ...info, point: onPoint(info.level) });
    }

    setSelectDigimons(cardArr);
  };

  //Adicionar nova carta
  const onAddCard = () => {
    //Se quantidade de clicks for zero não prossiga
    if (qtdClicks == 0) {
      showMessage(
        "Atenção",
        "Você não tem mais cartas disponiveis.",
        "warning"
      );
      return;
    }

    //Quantidade de Digimons totais
    const qtdTot = listDigimons.length;
    //Posição aleatoria
    let position = getRndInteger(0, qtdTot);

    const info = listDigimons[position];

    selectDigimons.push({ ...info, point: onPoint(info.level) });
    setQtdClicks((prev) => prev - 1);
    setSelectDigimons(selectDigimons.filter(filterUpdateDom));
  };

  //Fecha modal de bem vindo
  const onCloseWelcome = () => {
    if (!nameUser) {
      showMessage(
        "Atenção",
        "Para ver suas cartas insira seu Nome no campo.",
        "warning"
      );
      return;
    }

    setIsWelcome(false);
    setQtdClicks(3);
  };

  //Inseri as informações do input Nome
  const onChangeTextName = (event) => {
    setNameUser(event ? event.target.value : "");
  };

  //Embaralha as cartas selecionadas
  const onShuffleSelectedCards = () => {
    setSelectDigimons(shuffle(selectDigimons).filter(filterUpdateDom));
  };

  const filterUpdateDom = (d, i) => {
    return i > -1 && d;
  };

  const onSumPoint = () => {
    //let sum recebera a soma de pontos
    let sum = 0;

    for (let index = 0; index < selectDigimons.length; index++) {
      const point = selectDigimons[index].point;
      sum += point;
    }

    setTotPoint(sum);
  };

  //Reseta as informações essenciais e volta ao inicio
  const onStartGame = () => {
    setNameUser("");
    setListDigimons([]);
    setSelectDigimons([]);
    setQtdClicks(0);
    setTotPoint(0);
    setIsWelcome(true);
  };

  //fecha modal about
  const onCloseAbout = () => {
    setIsOpenAbout(false);
  };

  //abre modal about
  const onOpenAbout = () => {
    setIsOpenAbout(true);
  }

  useEffect(() => {
    if (!isOpenWelcome) {
      onGetDigimons();
    }
  }, [isOpenWelcome]);

  useEffect(() => {
    if (listDigimons.length > 0) {
      onFirstListCard();
    }
  }, [listDigimons]);

  useEffect(() => {
    onSumPoint();
    console.log("selectDigimons", selectDigimons);
  }, [selectDigimons]);

  return (
    <div className="App">
      <Header
        isOpenWelcome={isOpenWelcome}
        nameUser={nameUser}
        onStartGame={onStartGame}
        onOpenAbout={onOpenAbout}
      />
      <RowPoint
        totPoint={totPoint}
        qtdClicks={qtdClicks}
        onAddCard={onAddCard}
        onShuffleSelectedCards={onShuffleSelectedCards}
      />
      <Divider />
      <ListCard selectDigimons={selectDigimons} />

      <Welcome
        open={isOpenWelcome}
        valueName={nameUser}
        onCloseWelcome={onCloseWelcome}
        onChangeTextName={onChangeTextName}
      />

      <About open={isOpenAbout} onCloseAbout={onCloseAbout} />
    </div>
  );
}

export default App;
