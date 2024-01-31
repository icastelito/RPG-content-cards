import ItensShowcase from "../../components/ItensShowcase";
import { itensTest } from "../../mocks/Items/testitens";
import { HeaderIndex } from "../../components/RouterRender";
import * as S from "./styles";

const Itens = () => {

return (
  <>
  <HeaderIndex />
  <S.ShowcaseSection>
    <ItensShowcase itensList={itensTest}/>
  </S.ShowcaseSection>
  </>
);
};

export default Itens;
