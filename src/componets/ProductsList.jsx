import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { addToCart, loadData } from "../actions/productAction";

class ProductsList extends Component {
  componentWillMount() {
    this.props.dispatch(loadData());
  }

  handleClick = id => {
    this.props.addToCart(id);
  };

  render() {
    const isLoggedIn = this.props.loading;
    let productList = this.props.items.map(item => {
      return (
        <div className="col-lg-3 mt-2 mb-2" key={item.id}>
          <Card>
            <Card.Img variant="top" alt={item.title} src={item.img} />
            <Card.Body className="center">
              <Card.Title>{item.title.substring(0, 15)}...</Card.Title>
              <Card.Text className="text-limit">{item.desc.substring(0, 50)}...</Card.Text>
              <Card.Title> Price : {item.price} ₹</Card.Title>
              <Button
                variant="primary btn-block"
                to="/"
                onClick={() => {
                  this.handleClick(item.id);
                }}
              >
                ADD TO CART
              </Button>
            </Card.Body>
          </Card>
        </div>
      );
    });
    return (
      <div>
        {isLoggedIn ? (
          <div>
            <div className="container text-center mt-5 mb-5">
              <Loader type="Oval" className="oval-type" />
            </div>
          </div>
        ) : (
          <div>
            <div className="container bg">
              <h2 className="mt-3 mb-3 text-muted text-center">Shop Items</h2>
              <div className="row mt-2 mb-2">{productList}</div>
              <hr />
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
