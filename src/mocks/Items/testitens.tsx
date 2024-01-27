export interface ItensProps {
  id: number;
  name: string;
  attunement: boolean;
  type: string;
  rarity: string;
  description: string[];
}

export const itensTest: ItensProps[] = [

  {
    id: 1,
    name: "Lingua de Dragão",
    attunement: true,
    type: "Pergaminho",
    rarity: "Comum",
    description: ["Um pergaminho que quando lido garante um bônus de +1 em testes de Intimidação."]


  },
]
