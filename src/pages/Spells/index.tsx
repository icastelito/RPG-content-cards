// import * as S from './styles';
import SpellShowcase from "../../components/SpellsShowcase";
import { spellsTest } from "../../mocks/Spells/testspells";

const Spells = () => {

    return (

        <div>
            <SpellShowcase spellsList={spellsTest}/>
        </div>

    )
  }

export default Spells;