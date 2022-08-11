import React, { Component } from "react";
import Cart from "./Cart";
import ProductList from "./ProductList";

export default class ExcerciseCart extends Component {
  state = {
    cartData: [],
  };

  addToCart = (newItem) => {
    let newCart = [...this.state.cartData];
    let index = newCart.findIndex((i) => i.maSP === newItem.maSP);

    if (index !== -1) {
      //already added
      newCart[index].soLuong += 1;
    } else {
      newCart.push({ ...newItem, soLuong: 1 });
    }

    this.setState({
      cartData: newCart,
    });
  };

  minusFromCart = (item) => {
    let newCart = this.state.cartData;
    let index = newCart.findIndex((i) => i.maSP === item.maSP);

    newCart[index].soLuong -= 1;
    this.setState({
      cartData: newCart,
    });
  };

  delFromCart = (item) => {
    let newCart = [...this.state.cartData];
    newCart = newCart.filter((i) => i.maSP !== item.maSP);
    this.setState({
      cartData: newCart,
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="text-center" style={{ color: "green" }}>
          Bài tập giỏ hàng
        </h3>
        <Cart
          cartData={this.state.cartData}
          addToCart={this.addToCart}
          minusFromCart={this.minusFromCart}
          delFromCart={this.delFromCart}
        />
        <ProductList addToCart={this.addToCart} />
      </div>
    );
  }
}
