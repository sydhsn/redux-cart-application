import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import Carousels from "./Carousels";
import ProductList from "./ProductsList";
import Cart from "./Cart";
class Header extends Component {
  render() {
    console.log(this.props.count);
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="container">
          <Navbar
            collapseOnSelect
            expand="lg"
            className="dark_primary_color"
            variant="dark"
          >
            <Navbar.Brand href="/">Products Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Link
                  to="/"
                  className="nav-link text_primary_color navbar_custom"
                >
                  Home
                </Link>
                {this.props.count !== 0  &&
                   <Link
                   to="/cart"
                   className="nav-link text_primary_color navbar_custom"
                 >
                   Cart
                 </Link>
                }
              </Nav>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link
                    to="/cart"
                    className="text-white badge1 p3 fa fa-shopping-cart fa-stack-1x xfa-inverse"
                    data-badge={this.props.count}
                    data-count="4b"
                  />
                </li>
              </ul>
            </Navbar.Collapse>
          </Navbar>
          <Carousels />
          <Switch>
            <Route  exact path="/"  component={ProductList} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(Header);
