import './App.scss';
import HomePage from "@/pages/HomePage/HomePage";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
      <div>
         <Router>

             <HomePage/>

         </Router>
      </div>
  );
}

export default App;
