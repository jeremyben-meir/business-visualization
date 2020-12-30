// import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home}/>
      </div>
    </Router>
  );
}

export default App;
