import { Box, Card, Typography, Divider } from "@mui/material";
import { levels } from "../../util/variabeles";
import { getRndInteger, filterLevels } from "../../util/functions";

const styles = {
  card: {
    heigth: "35vh",
    minWidth: "180px",
    width: "15vw",
    m: 1,
    borderStyle: "solid",
    borderRadius: 5,
  },
  divpoint: {
    backgroundColor: "#341f97",
    height: "30px",
    width: "30px",
    borderRadius: "0% 50% 50% 50%",
    transform: "rotate(45deg)",
    boxShadow: "inset -12px 10px 0px -9px #5f27cd",
  },
  textpoint: {
    mb: -4.5,
    ml: 1.2,
    zIndex: 9999,
    position: "absolute",
    color: "white",
    fontWeight: "900",
  },
  boximg: {
    display: "flex",
    justifyContent: "center",
  },
  img: { heigth: "300px", width: "180px" },
  textname: {
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  textdescri: { fontSize: "10pt", ml: 2, mr: 1 },
};

const CardDigi = ({ color, shadow1, shadow2, digimon, key }) => {
  

  //Busca a descrição pertencente ao seu level
  const onDescription = (typeLevel = "") => {
    const level = filterLevels(levels, typeLevel);

    return level.length > 0 ? level[0].description : "";
  };

  return (
    <Card
      key={key}
      sx={{
        ...styles.card,
        borderColor: color,
        boxShadow: `0 4px 8px 0 ${shadow1}, 0 6px 20px 0 ${shadow2}`,
      }}
    >
      <Box display="flex" justifyContent="flex-end" mr={2} mt={2}>
        <div>
          <Typography variant="body1" sx={styles.textpoint}>
            {digimon.point}
          </Typography>
          <div style={styles.divpoint}>
            <div style={styles.divpoint} />
          </div>
        </div>
      </Box>
      <Box style={styles.boximg}>
        <img style={styles.img} src={digimon.img} />
      </Box>
      <Divider />
      <Typography
        sx={{ ...styles.textname, backgroundColor: color }}
        variant="body1"
      >
        {digimon.name}
      </Typography>
      <Divider />
      <Typography sx={styles.textdescri} variant="body2">
        {onDescription(digimon.level)}
      </Typography>
    </Card>
  );
};

export default CardDigi;
