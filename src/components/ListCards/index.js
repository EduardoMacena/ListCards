import { levels } from "../../util/variabeles";
import { filterLevels } from "../../util/functions";
import { Box } from "@mui/material";
import CardDigi from "../Card";

const styles = {
  box1: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    mt: 4,
    pl: 10,
    pr: 10
  },
};

const ListCard = ({ selectDigimons }) => {
  //Busca a cor pertencente ao seu level
  const onColor = (typeLevel = "") => {
    const level = filterLevels(levels, typeLevel);

    return level.length > 0
      ? {
          color: level[0].color,
          shadow1: level[0].shadow1,
          shadow2: level[0].shadow2,
        }
      : "";
  };

  return (
    <Box sx={styles.box1}>
      {selectDigimons &&
        selectDigimons.map((digimon, index) => {
          const { color, shadow1, shadow2 } = onColor(digimon.level);
          return (
            <CardDigi
              color={color}
              shadow1={shadow1}
              shadow2={shadow2}
              digimon={digimon}
              key={index}
            />
          );
        })}
    </Box>
  );
};

export default ListCard;
