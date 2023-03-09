import { Store } from "react-notifications-component";
export const showMessage = (title, info, color) => {
  Store.addNotification({
    title: title,
    message: info,
    type: color,
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__bounceIn"],
    animationOut: ["animate__animated", "animate__bounceOut"],
    dismiss: {
      duration: 10000,
      onScreen: true,
    },
  });
};

// Gera um numero aleatório informando o valor minimo e maximo
export const getRndInteger = (min = 0, max = 0) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

// Filtra os Levels pelo tipo
export const filterLevels = (arr = [], typeLevel = "") => {
  return arr.filter((level) => level.type === typeLevel);
};
