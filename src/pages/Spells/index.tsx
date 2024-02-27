import { useState, useEffect } from "react";
import SpellShowcase from "../../components/SpellsShowcase";
import api from "../../config/api";
import { spellsTest, SpellProps } from "../../mocks/Spells/testspells";
import { HeaderIndex } from "../../components/RouterRender";
import * as S from "./styles";

const Spells = () => {
  const [renderSpells, setRenderSpells] = useState([] as SpellProps[]);

  const fetchData = async () => {
    try {
      const res = await api.get("/spells/");
      console.log(res.data.data);

      if (res.data.data.length > 0) {
        setRenderSpells(res.data.data);
      } else {
        setRenderSpells(spellsTest);
      }

      console.log(res.data.data);
      console.log("@@@ render Spells" + renderSpells);
    } catch (err) {
      console.log(err);
      setRenderSpells(spellsTest);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <HeaderIndex />
      {
        <S.ShowcaseSection>
          <SpellShowcase spellsList={renderSpells} />
        </S.ShowcaseSection>
      }
    </>
  );
};

export default Spells;
