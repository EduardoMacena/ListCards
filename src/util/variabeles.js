// "levels" lista os tipo de nivel e sua pontuação
/* 
  quando o  "POINT" tiver dois objetos
  a posição 0 é referente ao minimo e a 
  posição 1 referente ao maximo de pontos
*/

export const levels = [
  {
    type: "In Training",
    description:
      "O estágio de evolução que um Digimon normalmente tem imediatamente após a eclosão de um Digitama.",
    point: [0, 1],
    color: "#a5b1c2",
    shadow1: "rgba(165, 177, 194, 0.5)",
    shadow2: "rgba(165, 177, 194, 0.39)"
  },
  {
    type: "Fresh",
    description:
      "A este nível, os dados de composição de um Digimon são instáveis, por isso são muito fracos.",
    point: [2, 3],
    color: "#778ca3",
    shadow1: "rgba(119, 140, 163, 0.5)",
    shadow2: "rgba(119, 140, 163, 0.39)",
  },
  {
    type: "Training",
    description:
      "Embora seus dados de composição tenham se estabilizado, ainda é amplamente incapaz de lutar.",
    point: [4, 5],
    color: "#fbc531",
    shadow1: "rgba(251, 197, 49, 0.5)",
    shadow2: "rgba(251, 197, 49, 0.39)",
  },
  {
    type: "Rookie",
    description:
      "O curso de sua evolução futura pode variar drasticamente dependendo de como ele é criado neste estágio de evolução.",
    point: [6],
    color: "#45aaf2",
    shadow1: "rgba(69, 170, 242, 0.5)",
    shadow2: "rgba(69, 170, 242, 0.39)",
  },
  {
    type: "Champion",
    description:
      "Este é o estágio de evolução mais alto que a maioria dos Digimon já atingiu.",
    point: [7],
    color: "#a55eea",
    shadow1: "rgba(165, 94, 234, 0.5)",
    shadow2: "rgba(165, 94, 234, 0.39)",
  },
  {
    type: "Ultimate",
    description:
      "Na selva, os Digimons Perfeitos geralmente assumem o papel de líderes de matilha.",
    point: [8],
    color: "#fd9644",
    shadow1: "rgba(253, 150, 68, 0.5)",
    shadow2: "rgba(253, 150, 68, 0.39)",
  },
  {
    type: "Mega",
    description:
      "Devido ao seu poder absoluto, eles tendem a agir sozinhos.",
    point: [9],
    color: "#eb3b5a",
    shadow1: "rgba(235, 59, 90, 0.5)",
    shadow2: "rgba(235, 59, 90, 0.39)",
  },
  {
    type: "Armor",
    description:
      "Os níveis de poder relativos de Armor Digimon variam, dependendo da afinidade entre um Digimental e o Digimon que o usou.",
    point: [10],
    color: "black",
    shadow1: "rgba(0, 0, 0, 0.5)",
    shadow2: "rgba(0, 0, 0, 0.39)",
  },
];
