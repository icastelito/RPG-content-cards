import * as S from "./styles";
import { SpellProps } from "../../mocks/Spells/testspells";

interface SpellShowcaseProps {
  spellsList: SpellProps[];
}

const SpellShowcase: React.FC<SpellShowcaseProps> = ({spellsList}) => (
  <S.Showcase>
    {spellsList.map((item) => (
        <S.ShowcaseContent  key={item.id}>  
          
          <S.SpellName> {item.name} </S.SpellName>
          <S.SpellLevelSchool> {item.level}º nível de {item.school} </S.SpellLevelSchool>
          <S.SpellDescription> {item.description} </S.SpellDescription>
          <S.SpellCastingTime> {item.castingTime} </S.SpellCastingTime>
          <S.SpellRange> {item.range} </S.SpellRange>
          <S.SpellComponents> {item.components} </S.SpellComponents>
          <S.SpellDuration> {item.duration} </S.SpellDuration>

          



   
        </S.ShowcaseContent>
    ))}
    
  </S.Showcase>
);

export default SpellShowcase;