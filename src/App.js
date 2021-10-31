import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Navigation from './Pages/Home/Navigation/Navigation';
import Footer from './Pages/Footer/Footer';
import Login from './Pages/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Booking from './Pages/Booking/Booking';
import PrivetRoute from './PrivetRoute/PrivetRoute';
import AllOrder from './Pages/AllOrder/AllOrder';
import AddOffer from './Pages/AddOffer/AddOffer';
import MyOrder from './Pages/MyOrder/MyOrder';
import Contact from './Pages/Contact/Contact';
import OrderReview from './Pages/OrderReview/OrderReview';

function App() {

  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <PrivetRoute exact path="/booking">
              <Booking></Booking>
            </PrivetRoute>
            <PrivetRoute path="/booking/:id">
              <OrderReview></OrderReview>
            </PrivetRoute>
            <PrivetRoute path="/allorder">
              <AllOrder></AllOrder>
            </PrivetRoute>
            <PrivetRoute path="/addoffer">
              <AddOffer></AddOffer>
            </PrivetRoute>
            <PrivetRoute path="/myorder">
              <MyOrder></MyOrder>
            </PrivetRoute>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
