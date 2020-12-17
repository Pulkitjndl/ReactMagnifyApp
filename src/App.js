import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ProductList from './Components/Products';
import Login from './Components/Login';




function App() {

  useEffect(() => {
    console.log(window.location.href)

    if (window.location.href.startsWith("https://ecart-sell.web.app")) {
      window.location.href = "https://ecart-sell.firebaseapp.com"
    }
  
  })



  return (
 <Router>
      <div className="App">
       
        <Switch>
          <Route exact path="/">
            {localStorage.getItem("loggedIn") == "true" ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/dashboard">
            {localStorage.getItem("loggedIn") == "true" ? <ProductList /> : <Redirect to="/login" />}
          </Route>

          <Route path="/:any">
            {localStorage.getItem("loggedIn") == "true" ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
          </Route>

        </Switch>
        {/* </LoginContext.Provider> */}
      </div>
    </Router>
  );
}

export default App;