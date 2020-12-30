import React from 'react';
import {Map} from '../components/Map.js';
import { Div, Button, Icon, Dropdown } from "atomize";

const Home = () => {

  return (
    <Div d="flex">
      <Button
        h="2.5rem"
        w="2.5rem"
        bg="warning700"
        hoverBg="warning600"
        rounded="circle"
        m={{ r: "1rem" }}
        shadow="2"
        hoverShadow="4"
      >
        <Icon name="Search" size="20px" color="white" />
        <Dropdown/>
      </Button>
    </Div>
  );
}

export default Home;