import * as S from "./styles";
import { SpellProps } from "../../mocks/Spells/testspells";


interface SpellShowcaseProps {
  spellsList: SpellProps[];
}


const SpellShowcase: React.FC<SpellShowcaseProps> = ({spellsList}) => (
  <S.Showcase>
    {spellsList.map((item) => (
      <div key={item.id}>
        <S.ShowcaseContent> 
          {item.name} 
        </S.ShowcaseContent>
      </div>
    ))}
  </S.Showcase>
);

export default SpellShowcase;