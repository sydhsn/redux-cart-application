import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../index.css";
class Report extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  
  template = {};

  handleChecked = e => {
    e.preventDefault();
    if (e.target.checked) {
      this.props.addShipping();
    } else {
      this.props.substractShipping();
    }
  };

  handleClick = e => {
    e.preventDefault();
    this.setState({ show: true });
  };

  render() {
    return (
      <div className="container pad_0">
        <div className="col-lg-12 pad_0">
          <div className="table-responsive">
            <table className="table table-striped">
              <tbody>
                <tr>
                  <td>
                    <input
                      type="checkbox"
                      refs="shipping"
                      onChange={this.handleChecked}
                    />
                  </td>
                  <td>Shipping Charge : (+6 ₹)</td>
                  <td />
                  <td />
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td className="text-right">
                    <strong>{this.props.total} ₹</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col mb-2">
          {this.state.show ? this.template : null}
          <div className="row">
            <div className="col-sm-12  col-md-6">
              <Link className="btn btn-block btn-primary mt-2 mb-2" to="/">
                Continue Shopping
              </Link>
            </div>
            <div className="col-sm-12 col-md-6 text-right mt-2 mb-2">
              <button
                className="btn btn-block btn-success"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    addedItems: state.addedItems,
    total: state.total,
    count: state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addShipping: () => {
      dispatch({ type: "ADD_SHIPPING" });
    },
    substractShipping: () => {
      dispatch({ type: "SUB_SHIPPING" });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Report);
