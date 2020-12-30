// import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import PopupTest from './views/PopupTest';
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home}/>
        <Route path="/test" exact component={PopupTest}/>
      </div>
    </Router>
  );
}

export default App;
