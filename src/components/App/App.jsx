import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from "@/pages/HomePage/HomePage";
import {NavButton} from "../Buttons/Buttons";

function App() {
  return (
      <div>
         <Router>
             <NavButton text="button" className="button green" to="$556"/>
             <HomePage />

         </Router>
      </div>
  );
}

export default App;
