import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Header, Footer, HomePage, AboutPage, ShopPage, ServicePage, ServiceSinglePage, TeamPage, ContactPage, CartPage, ErrorPage, ChangeLogPage, LicencesPage, PasswordPage, Subscription, CategoryPage, ProductPage, } from "./imports";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchDataAsync} from "../../store/slices/categoriesSlice";
function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(fetchDataAsync());
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };

        fetchData();
    }, [dispatch]);
    const handleSubscribe = (values) => {
        const SUBSCRIBE_KEY = "subscribeData";
        const currentData = JSON.parse(localStorage.getItem(SUBSCRIBE_KEY)) || [];
        const newKey = (currentData.length + 1).toString();
        currentData.push({
            emails: {
                [newKey]: values.email
            }
        });
        localStorage.setItem(SUBSCRIBE_KEY, JSON.stringify(currentData));

    }

    return (
      <div>
          <Router>
              <Header></Header>
              <Routes>
                  <Route exact path="/" element={<HomePage/>} />
                  <Route path="/about" element={<AboutPage/>}/>
                  <Route path="/products" element={<ShopPage/>}/>
                  <Route path="/products/:category" element={<CategoryPage/>} />
                  <Route path="/products/:category/:productName" element={<ProductPage />}/>
                  <Route path="/services" element={<ServicePage/>}/>
                  <Route path="/team" element={<TeamPage/>}/>
                  <Route path="/contacts" element={<ContactPage/>}/>
                  <Route path="/cart" element={<CartPage/>}/>
                  <Route path="/licences" element={<LicencesPage/>}/>
                  <Route path="/password-protection" element={<PasswordPage/>}/>
                  <Route path="/changelog" element={<ChangeLogPage/>}/>
                  <Route path="/services/single" element={<ServiceSinglePage/>}/>
                  <Route path="*" element={<ErrorPage/>}/>
              </Routes>
              <Subscription subscribe={handleSubscribe}></Subscription>
              <Footer></Footer>
          </Router>

      </div>
  );
}

export default App;
