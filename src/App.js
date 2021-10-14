import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Notfound from './components/Notfound/Notfound';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Shop from './components/Shop/Shop';
import AuthProvider from './context/AuthProvider';
 

function App() {
  return (
    <div>
      
     <AuthProvider>
     <Router>
       <Header></Header>
        <Switch>
          <Route exact path='/shop'>
          <Shop></Shop>
          </Route>
          <Route exact path='/'>
          <Shop></Shop>
          </Route>
          <Route exact path='/review'>
          <OrderReview></OrderReview>
          </Route>
          <PrivateRoute exact path='/placeOrder'>
          <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <PrivateRoute exact path='/inventory'>
          <Inventory></Inventory>
          </PrivateRoute>
          <Route exact path='/login'>
          <Login></Login>
          </Route>
          <Route exact path='/register'>
          <Register></Register>
          </Route>
          <Route exact path='*'>
          <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
     </AuthProvider>
      
    </div>
  );
}

export default App;
