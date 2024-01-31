// import * as S from './styles';
// import { useState, useEffect } from "react";
import SpellShowcase from "../../components/SpellsShowcase";
// import api from "../../config/api";
import { spellsTest,/* SpellProps*/ } from "../../mocks/Spells/testspells";
import { HeaderIndex } from "../../components/RouterRender";
import * as S from "./styles";

const Spells = () => {
  /*
  const [requestedSpells, setRequestedSpells] = useState([] as SpellProps[]);
  const [renderSpells, setRenderSpells] = useState([] as SpellProps[]);

  const fetchData = async () => {
    try {
      const res = await api.get("/spell/-");
      console.log(res.data);
      setRequestedSpells(res.data.data as SpellProps[]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
  // console.log("" + renderSpells);
  

  useEffect(() => {
    if (requestedSpells.length !== 0) {
      setRenderSpells(requestedSpells);
    } else {
      setRenderSpells(spellsTest);
    }
  }, [requestedSpells]);
  */


return (
  <>
  <HeaderIndex />

  <S.ShowcaseSection>
    <SpellShowcase spellsList={spellsTest}/>
  </S.ShowcaseSection>
  
  </>
);
};

export default Spells;
