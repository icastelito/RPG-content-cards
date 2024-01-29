import * as S from "./styles";
import { ItensProps } from "../../mocks/Items/testitens.tsx";

interface ItensShowcaseProps {
  itensList: ItensProps[];
}

const ItensShowcase: React.FC<ItensShowcaseProps> = ({ itensList }) => (
  <S.Showcase>
    {itensList.map((item) => (
      <S.ShowcaseContent key={item.id} >
        <S.SpellName> {item.name} </S.SpellName>
      </S.ShowcaseContent>
    ))}
  </S.Showcase>
);

export default ItensShowcase;
