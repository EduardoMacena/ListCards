import React, { useState, useEffect } from "react";
import {
  CardContent,
  Card,
  Typography,
  InputBase,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import logo from "../../../imgs/digimon-heroes.png";

const styles = {
  typographyCenter: {
    textAlign: "center",
    fontWeight: "900",
    color: "#005bea",
  },
  typographyBasicInput: {
    fontWeight: "900",
    ml: 4,
  },
  box: {
    display: "flex",
    justifyContent: "center",
    mb: 15,
  },
  boxDefault: {
    display: "flex",
    justifyContent: "center",
  },
  bodyInput: {
    borderWidth: 0.3,
    borderStyle: "solid",
    borderRadius: 2,
    width: "100%",
    borderColor: "white",
    boxShadow: "1px 0px 6px -3px rgba(0,0,0,1)",
    WebkitBoxShadow: "1px 0px 6px -3px rgba(0,0,0,1)",
    MozBoxShadow: "1px 0px 6px -3px rgba(0,0,0,1)",
    backgroundColor: "white",
  },
  inputProps: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: "12pt",
  },
  button: {
    mt: 1,
    borderRadius: 2,
    backgroundColor: "#45aaf2",
    color: "white",
    fontWeight: "900",
    ":hover": {
      backgroundColor: "#2d98da",
    },
  },
  cardcontent: {
    width: `${20}vw`,
    height: `${45}vh`,
    minWidth: "350px",
    minHeight: "350px",
  },
};

const Formulario = ({ onChangeTextName, valueName, onCloseWelcome }) => {
  return (
    <Card
      style={{
        borderRadius: 20,
      }}
    >
      <CardContent style={styles.cardcontent}>
        <Box sx={styles.box}>
          <Typography
            sx={{ ...styles.typographyCenter, color: "#3d3d3d" }}
            variant="h3"
          >
            Digi
          </Typography>
          <Typography
            sx={{ ...styles.typographyCenter, mt: 1, color: "#ffaf40" }}
            variant="h2"
          >
            Card
          </Typography>
        </Box>

        <Box sx={{ mb: 10, mt: -15, ...styles.boxDefault }}>
          <img src={logo} height="100px" width="100px" style={{ margin: 0 }} />
        </Box>

        <Box>
          <Typography sx={styles.typographyBasicInput} variante="h6">
            Nome
          </Typography>
          <InputBase
            onChange={onChangeTextName}
            placeholder="Nome Completo"
            value={valueName}
            sx={styles.bodyInput}
            inputProps={{ style: styles.inputProps }}
          />

          <Button
            onClick={onCloseWelcome}
            sx={styles.button}
            fullWidth
            variant="contained"
          >
            Ver Cartas
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Formulario;
