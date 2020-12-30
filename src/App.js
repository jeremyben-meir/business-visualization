import './App.css';
import Home from './views/Home';
import PopupTest from './views/PopupTest';
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import React, { Component } from "react";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Div, StyleReset, ThemeProvider } from "atomize";


const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();


const theme = {
  colors: {
    black900: "#1d1d1e"
  }
};

function App() {
  return (
    <Router>
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <ThemeProvider theme={theme}>
        <StyleReset />
          <Route path="/" exact component={Home}/>
          <Route path="/test" exact component={PopupTest}/>
      </ThemeProvider>
    </StyletronProvider>
    </Router>
  );
}

export default App;
