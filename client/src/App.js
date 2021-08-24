import './App.css';
import { Router } from '@reach/router';
import Main from './Views/Main';
import PirateForm from './Components/NewPirate';
import Details from './Views/PirateDetails';
import LogReg from './Views/LogReg';


function App() {

  return (
    <div className="App">
      <Router>
        <Main path="/pirates"/>
        <PirateForm path="/pirates/new"/>
        <Details path="/pirates/:id"/>
        <LogReg path="/"/>
      </Router>
    </div>
  );
}

export default App;
