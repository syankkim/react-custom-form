import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import MakeOrder from './components/MakeOrder'
import Test from './components/Test'
import Footer from './components/Footer'
import './components/css/header.css'
import './components/css/makeOrder.css'
import './components/css/footer.css'

function App() {
  return (
    <Router>
      <Header/>
        <div className="main-container">
          <Switch>
              <Route exact path={"/"} component={MakeOrder}/>
              <Route path={"/test"} component={Test}/>
          </Switch>
        </div>
        <Footer/>
    </Router>
  );
}

export default App;
