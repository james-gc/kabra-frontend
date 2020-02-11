import React from "react";
import BootstrapProvider from "@bootstrap-styled/provider";
import { Button } from "@bootstrap-styled/v4";
// import GithubData from "./components/GithubData";
import { Container } from "@bootstrap-styled/v4";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductPublicList from "./pages/products.public";
// import logo from './logo.svg';
// import './App.css';
import { Nav, NavItem, NavLink } from "@bootstrap-styled/v4";
import {  } from "@bootstrap-styled/v4/lib/Nav/NavLink";

function App() {
  return (
    <BootstrapProvider>
      <Container fluid>
        <Router>
          <Nav>
            <NavItem>
              <NavLink active to="/products" tag={Link}>Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink active to="/cart" tag={Link}>Cart</NavLink>
            </NavItem>
           </Nav>
          <Switch>
            <Route path="/products">
              <ProductPublicList />
            </Route>
          </Switch>
        </Router>
        <Button color="danger">Go To Products</Button>
        {/* <GithubData /> */}
      </Container>
    </BootstrapProvider>
  );
}

export default App;
