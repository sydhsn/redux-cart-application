import React, { Component } from "react";
import { connect } from "react-redux";
import "../index.css";
import {
  removeItem,
  addQuantity,
  subtractQuantity
} from "../actions/productAction";

import Report from "./Report";

class Cart extends Component {
  //to remove the item completely
  handleRemove = id => {
    this.props.removeItem(id);
  };
  //to add the quantity
  handleAddQuantity = id => {
    this.props.addQuantity(id);
  };
  //to substruct from the quantity
  handleSubtractQuantity = id => {
    this.props.subtractQuantity(id);
  };
  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map(item => {
        return (
          <tr key={item.id}>
            <td>
              <img src={item.img} width="50" height="50" alt={item.title} />
            </td>
            <td>{item.title}</td>
            <td>In stock {item.qty}</td>
            <td>
              <div className="quantity">
                <i
                  className="plus-btn"
                  type="button"
                  name="button"
                  onClick={() => {
                    this.handleAddQuantity(item.id);
                  }}
                >
                  <img
                    src="https://designmodo.com/demo/shopping-cart/plus.svg"
                    alt="{item.title}"
                  />
                </i>
                <input type="text" name="name" defaultValue="1" />
                <i
                  className="minus-btn"
                  type="button"
                  name="button"
                  onClick={() => {
                    this.handleSubtractQuantity(item.id);
                  }}
                >
                  <img
                    src="https://designmodo.com/demo/shopping-cart/minus.svg"
                    alt="{item.title}"
                  />
                </i>
              </div>
            </td>
            <td className="text-right">₹ {item.price}</td>
            <td className="text-right">
              <button
                className="btn btn-sm btn-danger"
                onClick={() => {
                  this.handleRemove(item.id);
                }}
              >
                <i className="fa fa-trash" />
              </button>
            </td>
          </tr>
        );
      })
    ) : (
      <tr>
        <td colSpan="6" align="center">
          No Data Available
        </td>
      </tr>
    );
    return (
      <div className="container pad_0">
        <div className="cart">
          <div className="row">
            <div className="col-lg-12">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col"> </th>
                      <th scope="col">Product</th>
                      <th scope="col">Available</th>
                      <th scope="col" className="text-center">
                        Quantity
                      </th>
                      <th scope="col" className="text-right">
                        Price
                      </th>
                      <th> </th>
                    </tr>
                  </thead>
                  <tbody>{addedItems}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Report />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.addedItems
    //addedItems: state.addedItems
  };
};
const mapDispatchToProps = dispatch => {
  return {
    removeItem: id => {
      dispatch(removeItem(id));
    },
    addQuantity: id => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: id => {
      dispatch(subtractQuantity(id));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
