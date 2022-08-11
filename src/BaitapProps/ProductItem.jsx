import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { item, addToCart, changeStateChiTiet } = this.props;

    return (
      <div className="card">
        <img src={item.hinhAnh} alt="..." height={350} />
        <div className="card-body">
          <h5 className="card-title">{item.tenSP}</h5>
        </div>
        <div className="card-footer text-center">
          <button
            type="button"
            className="btn btn-success text-white m-2"
            onClick={(e) => {
              changeStateChiTiet(item);
            }}
          >
            Xem chi tiết
          </button>
          <button
            className="btn btn-danger text-white m-2"
            onClick={() => {
              addToCart(item);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
