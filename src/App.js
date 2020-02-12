import React from "react";
import BootstrapProvider from "@bootstrap-styled/provider";
import { Container } from "@bootstrap-styled/v4";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductsPage from "./pages/products.page";
import CartPage from "./pages/cart.page";
// import logo from './logo.svg';
// import './App.css';
import { Nav, NavItem, NavLink } from "@bootstrap-styled/v4";

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
              <ProductsPage />
            </Route>
            <Route path="/cart">
              <CartPage />
            </Route>
          </Switch>
        </Router>
      </Container>
    </BootstrapProvider>
  );
}

export default App;
