import './App.css';
import { Router } from '@reach/router';
import Main from './Views/Main';
import PirateForm from './Components/NewPirate';
import Details from './Views/PirateDetails';
import LogReg from './Views/LogReg';


function App() {
  const NotFound = () =>{
    return(
    <div>Route not found</div>
    )
  }

  return (
    <div className="App">
      <Router>
        <Main path="/pirates"/>
        <PirateForm path="/pirates/new"/>
        <Details path="/pirates/:id"/>
        <LogReg path="/"/>
        <NotFound default/>
      </Router>
    </div>
  );
}

export default App;
