import React from 'react';
import {Map} from '../components/Map.js';
import {HomeForm} from '../components/HomeForm.js';
import {Layout} from '../components/Layout';
import {useState,useEffect} from 'react'; 
import styled, { css } from 'styled-components';

const Home = () => {

  const [zipLocation,setZipLocation] = useState(10025)

  const PushMap = (zipcode) => {
    console.log(zipcode)
    setZipLocation(zipcode);
  }

  return (
    <>
      <Map zipLocation={zipLocation}/>
      <HomeForm PushMap={PushMap}/>
      <StyledText>
        <p>wadawdawdawdAbauyawldhab dwa nkefabwj awdjhawbudyawgduiaw dyuawtf dyiawtf dyuawtfd iuwaytdfiuayd fiwaudyg afiudywag dukyawg duwaygduiaygduiawygduiaywgduiwaydguaiw dgwuiad yguaw dguiayg duiawydg uiawdyg uwayg uidy giwuywadawdawdawdAbauyawldhab dwa nkefabwj awdjhawbudyawgduiaw dyuawtf dyiawtf dyuawtfd iuwaytdfiuayd fiwaudyg afiudywag dukyawg duwaygduiaygduiawygduiaywgduiwaydguaiw dgwuiad yguaw dguiayg duiawydg uiawdyg uwayg uidy giwuywadawdawdawdAbauyawldhab dwa nkefabwj awdjhawbudyawgduiaw dyuawtf dyiawtf dyuawtfd iuwaytdfiuayd fiwaudyg afiudywag dukyawg duwaygduiaygduiawygduiaywgduiwaydguaiw dgwuiad yguaw dguiayg duiawydg uiawdyg uwayg uidy giwuywadawdawdawdAbauyawldhab dwa nkefabwj awdjhawbudyawgduiaw dyuawtf dyiawtf dyuawtfd iuwaytdfiuayd fiwaudyg afiudywag dukyawg duwaygduiaygduiawygduiaywgduiwaydguaiw dgwuiad yguaw dguiayg duiawydg uiawdyg uwayg uidy giwuywadawdawdawdAbauyawldhab dwa nkefabwj awdjhawbudyawgduiaw dyuawtf dyiawtf dyuawtfd iuwaytdfiuayd fiwaudyg afiudywag dukyawg duwaygduiaygduiawygduiaywgduiwaydguaiw dgwuiad yguaw dguiayg duiawydg uiawdyg uwayg uidy giwuywadawdawdawdAbauyawldhab dwa nkefabwj awdjhawbudyawgduiaw dyuawtf dyiawtf dyuawtfd iuwaytdfiuayd fiwaudyg afiudywag dukyawg duwaygduiaygduiawygduiaywgduiwaydguaiw dgwuiad yguaw dguiayg duiawydg uiawdyg uwayg uidy giwuywadawdawdawdAbauyawldhab dwa nkefabwj awdjhawbudyawgduiaw dyuawtf dyiawtf dyuawtfd iuwaytdfiuayd fiwaudyg afiudywag dukyawg duwaygduiaygduiawygduiaywgduiwaydguaiw dgwuiad yguaw dguiayg duiawydg uiawdyg uwayg uidy giwuywadawdawdawdAbauyawldhab dwa nkefabwj awdjhawbudyawgduiaw dyuawtf dyiawtf dyuawtfd iuwaytdfiuayd fiwaudyg afiudywag dukyawg duwaygduiaygduiawygduiaywgduiwaydguaiw dgwuiad yguaw dguiayg duiawydg uiawdyg uwayg uidy giwuywadawdawdawdAbauyawldhab dwa nkefabwj awdjhawbudyawgduiaw dyuawtf dyiawtf dyuawtfd iuwaytdfiuayd fiwaudyg afiudywag dukyawg duwaygduiaygduiawygduiaywgduiwaydguaiw dgwuiad yguaw dguiayg duiawydg uiawdyg uwayg uidy giwuy</p>
      </StyledText>
    </>
  );
}

export default Home;

const StyledText = styled.div`
  background:black;
  z-index:2;
`;