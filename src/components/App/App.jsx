import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HomePage from '../../pages/HomePage/HomePage';
import AboutPage from '../../pages/AboutPage/AboutPage';
import ShopPage from '../../pages/ShopPage/ShopPage';
import ServicePage from '../../pages/ServicePage/ServicePage';
import TeamPage from '../../pages/TeamPage/TeamPage';
import ContactPage from '../../pages/ContactPage/ContactPage';
import CartPage from '../../pages/CartPage/CartPage';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import ChangeLogPage from '../../pages/ChangeLogPage/ChangeLogPage';
import LicencesPage from '../../pages/LicencesPage/LicencesPage';
import PasswordPage from '../../pages/PasswordPage/PasswordPage';
import Subscription from '../Subscription/Subscription';
function App() {

    const handleSubscribe = (values) => {
        console.log('Subscribed with values:', values);
    }
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
                  <Route path="/error" element={<ErrorPage/>}/>
                  <Route path="/licences" element={<LicencesPage/>}/>
                  <Route path="/password-protection" element={<PasswordPage/>}/>
                  <Route path="/changelog" element={<ChangeLogPage/>}/>
              </Routes>
              <Subscription subscribe={handleSubscribe}></Subscription>
              <Footer></Footer>
          </Router>
      </div>
  );
}

export default App;
