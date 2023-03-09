import { Box, Button, Badge, Card, Typography } from "@mui/material";
import {
  Queue as QueueIcon,
  Refresh as RefreshIcon,
} from "@mui/icons-material/";

const styles = {
  box: {
    justifyContent: "space-between",
    display: "flex",
    mt: 2,
    mr: 2,
    ml: 2,
    mb: 2,
  },
  box1: {
    display: "flex",
  },
  box2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textpoint: {
    fontWeight: "900",
    ml: 2,
    mr: 2,
    mt: 1,
    mb: 1,
  },
  button1: {
    borderRadius: 10,
    backgroundColor: "white",
    color: "#0be881",
    ":hover": {
      color: "#05c46b",
      backgroundColor: "white",
    },
    mr: 2,
  },
  button2: {
    borderRadius: 10,
    backgroundColor: "white",
    color: "#4b4b4b",
    ":hover": {
      color: "#3d3d3d",
      backgroundColor: "white",
    },
  },
  badge: {
      style: {
        backgroundColor: "#ffaf40",
        color: "white",
      },
  },
};

const RowPoint = ({
  totPoint,
  qtdClicks,
  onAddCard,
  onShuffleSelectedCards,
}) => {
  return (
    <Box sx={styles.box}>
      <Card>
        <Box style={styles.box2}>
          <Typography sx={styles.textpoint} variant="h6">
            {totPoint}pt
          </Typography>
        </Box>
      </Card>
      <Box sx={styles.box1}>
        <Button
          variant="contained"
          sx={styles.button1}
          endIcon={<RefreshIcon />}
          onClick={() => {
            onShuffleSelectedCards();
          }}
        >
          Embaralhar
        </Button>
        <Badge badgeContent={qtdClicks} componentsProps={{badge: styles.badge}}>
          <Button
            variant="contained"
            sx={styles.button2}
            endIcon={<QueueIcon />}
            onClick={() => {
              onAddCard();
            }}
          >
            Adicionar
          </Button>
        </Badge>
      </Box>
    </Box>
  );
};

export default RowPoint;
