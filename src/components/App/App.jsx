import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from "@/pages/HomePage/HomePage";

function App() {
  return (
      <div>
         <Router>

           <HomePage />

         </Router>
      </div>
  );
}

export default App;
