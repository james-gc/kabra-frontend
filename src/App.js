import React from "react";

import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "./reducers";
import BootstrapProvider from "@bootstrap-styled/provider";
import { Container, Row, Col } from "@bootstrap-styled/v4";
import { Switch, Route, Link } from "react-router-dom";

import ProductsPage from "./pages/products.page";
import CartPage from "./pages/cart.page";
// import logo from './logo.svg';
// import './App.css';
import { Nav, NavItem, NavLink } from "@bootstrap-styled/v4";

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <BootstrapProvider>
          <Container>
            <Row>
              <Col>
                <Nav>
                  <NavItem>
                    <NavLink active to="/" tag={Link}>
                      Products
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink active to="/cart" tag={Link}>
                      Cart
                    </NavLink>
                  </NavItem>
                </Nav>
                <Switch>
                  <Route path="/cart">
                    <CartPage />
                  </Route>
                  <Route path="/">
                    <ProductsPage />
                  </Route>
                </Switch>
              </Col>
            </Row>
          </Container>
        </BootstrapProvider>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
