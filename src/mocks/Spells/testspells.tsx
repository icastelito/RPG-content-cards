export interface SpellProps {
  id: number;
  name: string;
  level: number;
  conjurer?: string[];
  school: string;
  description: string[];
  castingTime: string;
  range: string;
  damageResume?: string[];
  damageType?: string;
  components: string[];
  duration: string;
  source?: string;
}

export const spellsTest: SpellProps[] = [
  {
    id: 1,
    name: "Empurrão de Força",
    level: 0,
    conjurer: ["Mago"],
    school: "Evocação",
    damageResume: ["1d6", "2d6", "3d6", "4d6"],
    damageType: "Energia",
    description: ["Você realiza um ataque com energia mágica arcana pura, faça um ataque a distância com magia contra o alvo, se atingir, o alvo sofre 1d6 de dano de Energia e precisa realizar um Teste de Resistência de Constituição contra a sua CD de Magia, sendo empurrado 1,5m para trás caso falhe.","O dano dessa magia aumenta em 1d6 quando você alcança o 5º nível (2d6), 11º nível (3d6) e 17º nível (4d6)."],
    castingTime: "1 ação",
    range: "9 metros",
    components: ["V", "S"],
    duration: "Instantânea"
  },
  {
    id: 2,
    name: "Curar Ferimentos",
    level: 1,
    school: "Cura",
    description: ["Cura criaturas feridas, restaurando pontos de vida."],
    castingTime: "1 ação",
    range: "Toque",
    components: ["V", "S"],
    duration: "Instantânea"
  },
  {
    id: 3,
    name: "Ilusão de Invisibilidade",
    level: 2,
    school: "Ilusão",
    description: ["Torna o alvo invisível por uma determinada duração."],
    castingTime: "1 ação",
    range: "Toque",
    components: ["V", "S"],
    duration: "1 hora"
  },
  {
    id: 4,
    name: "Relâmpago",
    level: 3,
    school: "Evocação",
    description: ["Invoca um raio de relâmpago para atingir um alvo."],
    castingTime: "1 ação",
    range: "100 pés",
    components: ["V", "S", "M (um pedaço de resina e um fio de cobre)"],
    duration: "Instantânea"
  },
  {
    id: 5,
    name: "Mão Mágica",
    level: 1,
    school: "Conjuração",
    description: ["Cria uma mão flutuante que pode realizar tarefas simples."],
    castingTime: "1 ação",
    range: "30 pés",
    components: ["V", "S"],
    duration: "1 minuto"
  },
  {
    id: 6,
    name: "Congelamento Temporal",
    level: 5,
    school: "Abjuração",
    description: ["Pára o tempo ao redor do alvo por um curto período."],
    castingTime: "1 ação",
    range: "60 pés",
    components: ["V", "S", "M (um relógio de areia)"],
    duration: "1 rodada"
  },
  {
    id: 7,
    name: "Charme de Encanto",
    level: 2,
    school: "Encantamento",
    description: ["Encanta a mente do alvo, tornando-o amigável."],
    castingTime: "1 ação",
    range: "30 pés",
    components: ["V", "S"],
    duration: "1 hora"
  },
  {
    id: 8,
    name: "Petrificação de Pedra",
    level: 4,
    school: "Transmutação",
    description: ["Transforma o alvo em pedra temporariamente."],
    castingTime: "1 ação",
    range: "60 pés",
    components: ["V", "S", "M (um olho de basilisco)"],
    duration: "Concentração, até 1 hora"
  },
  {
    id: 9,
    name: "Clarão de Luz",
    level: 0,
    school: "Evocação",
    description: ["Cria uma luz brilhante em um local."],
    castingTime: "1 ação",
    range: "Toque",
    components: ["V", "M (um grão de fósforo)"],
    duration: "1 minuto"
  },
  {
    id: 10,
    name: "Bálsamo de Cura Menor",
    level: 0,
    school: "Cura",
    description: ["Cura pequenas feridas."],
    castingTime: "1 ação",
    range: "Toque",
    components: ["V", "S"],
    duration: "Instantânea"
  }
]


