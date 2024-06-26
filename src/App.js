import Home from "./admin/Home";
import { Switch, Route, Link } from "react-router-dom";
import Layout from "./admin/Layout";
import { useEffect } from "react";
import db from './firebase';
import Customers from "./admin/Customers";
import Transaction from "./admin/Transaction";
import Profile from "./admin/Profile";
import ProfileCard from "./admin/ProfileCard";
import Money from "./admin/Money";
import Contact from "./admin/Contact";
import Login from "./admin/login";
import Register from "./admin/register";


const App = () => {
 
  return (
    <>
      <Layout />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/transaction">
          <Transaction />
        </Route>
        <Route path="/customers">
          <Customers />
        </Route>
        <Route path="/profile">
          <ProfileCard />
        </Route>
        <Route path="/money">
          <Money />
        </Route>
        <Route path="/Contact">
         <Contact />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </>
  );
};

export default App;
