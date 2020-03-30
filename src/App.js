import React from 'react';

import Header from './components/Header/Header';
import TopSection from './components/TopSection/TopSection';
import Footer from './components/Footer/Footer';
import DataSection from './components/DataSection/DataSection';
import Foods from './components/Foods/Foods';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import FoodDetials from './components/FoodDetails/FoodDetials';
import Login from './components/Login/Login';
import { AuthContextProvider } from './components/Login/useAuth';
import Sigunup from './components/Signup/Sigunup';
import Cart from './components/Cart/Cart';
import CartContextProvider from './Context/CartContext';
import Thankyou from './components/ThankYou/Thankyou';





function App() {
  return (
    <div >
        <CartContextProvider>
        <AuthContextProvider>
        <Header></Header>
          <Router>
            <Switch>
              <Route exact path="/">
                <TopSection></TopSection>
                <Foods></Foods>
                <DataSection></DataSection>
                <Footer></Footer>
              </Route>
              <Route path="/login">
                  <Login></Login>
                  <Footer></Footer>
              </Route>
              <Route path="/foods/:id">
                  <FoodDetials></FoodDetials>
                  <Footer></Footer>
              </Route>
              <Route path="/cart">
                <Cart></Cart>
              <Footer></Footer>
              </Route>
              <Route path="/signup">
                <Sigunup></Sigunup>
              <Footer></Footer>
              </Route>
              <Route path="/Thankyou">
                <Thankyou></Thankyou>
              <Footer></Footer>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          </Router>
          </AuthContextProvider>
          </CartContextProvider>
    </div>
  );
}

export default App;