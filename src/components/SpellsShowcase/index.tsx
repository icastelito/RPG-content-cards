import * as S from "./styles";
import { SpellProps } from "../../mocks/Spells/testspells";

interface SpellShowcaseProps {
  spellsList: SpellProps[];
}

const SpellShowcase: React.FC<SpellShowcaseProps> = ({ spellsList }) => (
  <S.Showcase>
    {spellsList.map((item) => (
      <S.ShowcaseContent key={item.id} >
        <S.SpellName> {item.name} </S.SpellName>
        <S.SpellLevelSchool>
          {" "}
          {item.level}º nível de {item.school}{" "}
        </S.SpellLevelSchool>
        <S.SpellComponents>
          {" "}
          Componentes: {item.components[0]}, {item.components[1]},{" "}
          {item.components[2]}{" "}
        </S.SpellComponents>
        <S.horizontalLine />
        <S.SpellCastingTime>
          {" "}
          Tempo de Conjuração: {item.castingTime}{" "}
        </S.SpellCastingTime>
        <S.SpellDuration> Tempo de Duração: {item.duration} </S.SpellDuration>
        <S.SpellRange> Alcance: {item.range} </S.SpellRange>
        <S.SpellDescription> Descrição: {item.description} </S.SpellDescription>
      </S.ShowcaseContent>
    ))}
  </S.Showcase>
);

export default SpellShowcase;
