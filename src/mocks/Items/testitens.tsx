export interface ItensProps {
  id: number;
  name: string;
  attunement: boolean;
  type: string;
  subtype: string;
  rarity: string;
  powerIdentity: string[];
  description: string[];
}

export const itensTest: ItensProps[] = [
  {
    id: 1,
    name: "Lingua de Dragão",
    attunement: true,
    type: "Pergaminho",
    subtype: "Magia",
    rarity: "Comum",
    powerIdentity: ["Neutro 1"],
    description: ["Um pergaminho que quando lido garante um bônus de +1 em testes de Intimidação."],
  },
  {
    id: 2,
    name: "Armadura Gélida de Agathys",
    attunement: true,
    type: "Armadura",
    subtype: "Brunea",
    rarity: "Raro",
    powerIdentity: ["Logos 3"],
    description: [
      "Essa armadura garante 18 de CA e não adiciona modificadores de defesa. ",
      "Você ganha resistência a dano Igneo e imunidade a dano Gélido. ",
      "Quando rolar iniciativa, você conjura a magia Armadura de Agathys automaticamente, e sempre no início do seu turno, você pode rolar 1d8, a magia é reconjurada caso o resultado seja 8. Você ainda pode usar um espaço de magia para conjurar essa magia.",
    ],
  },
];
