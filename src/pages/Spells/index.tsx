// import * as S from './styles';
import SpellShowcase from "../../components/SpellsShowcase";
import { spellsTest } from "../../mocks/Spells/testspells";
import * as S from "./styles";

const Spells = () => {
  return (
    <S.ShowcaseSection>
      <SpellShowcase spellsList={spellsTest} />
    </S.ShowcaseSection>
  );
};

export default Spells;
