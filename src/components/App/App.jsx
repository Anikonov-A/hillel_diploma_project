import './App.scss';
//import Example from '@/components/Example/Example';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from '../Header/Header';
import HomePage from '../../pages/HomePage/HomePage';
import AboutPage from "../../pages/AboutPage/AboutPage";
import ShopPage from "../../pages/ShopPage/ShopPage";
import ServicePage from "../../pages/ServicePage/ServicePage";
import TeamPage from "../../pages/TeamPage/TeamPage";
import ContactPage from "../../pages/ContactPage/ContactPage";
import CartPage from "../../pages/CartPage/CartPage";
import ErrorPage from '../../pages/ErrorPage/ErrorPage';

function App() {
  return (
      <div>
          <Router>
              <Header></Header>
              <Routes>
                  <Route exact path="/" element={<HomePage/>} />
                  <Route path="/about" element={<AboutPage/>}/>
                  <Route path="/products" element={<ShopPage/>}/>
                  <Route path="/services" element={<ServicePage/>}/>
                  <Route path="/team" element={<TeamPage/>}/>
                  <Route path="/contacts" element={<ContactPage/>}/>
                  <Route path="/cart" element={<CartPage/>}/>
                  <Route path="*" element={<ErrorPage/>}/>
              </Routes>
          </Router>
          {/*<Example></Example>*/}
      </div>
  );
}

export default App;
