import ItensShowcase from "../../components/ItensShowcase";
import { itensTest } from "../../mocks/Items/testitens";
import * as S from "./styles";

const Itens = () => {

return (
  <>
  
  <S.ShowcaseSection>
    <ItensShowcase itensList={itensTest}/>
  </S.ShowcaseSection>
  </>
);
};

export default Itens;
