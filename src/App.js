import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home'

import Product from './components/Product'

import { Redirect, Route, Switch } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout'
import Favorite from './components/favorite';
import UserPage from './components/userPage';
import Signup from './components/buttons/Signup';
import Login from './components/buttons/Login';
import ForgetPassword from './components/forgetpassword';
import Otp from './components/otp';

import NewPass from './components/newPass';
import Done from './components/Done';


function App() {
  return (
    <>
      <Header/>
      <Switch>
      <Route exact path="/" component={Home} />
      
        <Route exact path="/products" component={Product} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/favorite" component={Favorite} />
        <Route exact path="/user" component={UserPage} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgetpassword" component={ForgetPassword} />
        <Route exact path="/otp" component={Otp} />
        <Route exact path="/newPass" component={NewPass} />
        ر  <Route exact path="/done" component={Done} />

        <Redirect to="/" />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
