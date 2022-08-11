import React, { Component } from "react";

export default class Cart extends Component {
  countCart = () => {
    let { cartData } = this.props;
    let count = 0;
    cartData.forEach((item, index) => {
      count += item.soLuong;
    });
    return count;
  };

  lowerDecision = (item) => {
    if (item.soLuong > 1) {
      this.props.minusFromCart(item);
    } else {
      this.props.delFromCart(item);
    }
  };

  renderCartItem = (cartData) => {
    return cartData.map((item, index) => {
      return (
        <tr key={index} className="text-start">
          <td>{item.maSP}</td>
          <td>
            <img src={item.hinhAnh} alt="..." width={100} />
          </td>
          <td>{item.tenSP}</td>
          <td>
            <button
              className="btn btn-primary m-2"
              onClick={() => {
                this.props.addToCart(item);
              }}
            >
              +
            </button>
            {item.soLuong}
            <button
              className="btn btn-primary m-2"
              onClick={() => {
                this.lowerDecision(item);
              }}
            >
              -
            </button>
          </td>
          <td>{item.giaBan}</td>
          <td>{item.giaBan * item.soLuong}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                if (
                  window.confirm("Xác nhận xóa sản phẩm " + item.tenSP + " ?")
                ) {
                  this.props.delFromCart(item);
                }
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="text-end mb-2">
        <button
          type="button"
          className="btn btn-light text-danger"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Giỏ hàng ({this.countCart()})
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header text-start">
                <h5 className="modal-title" id="exampleModalLabel">
                  Giỏ hàng
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <table className="table text-start">
                  <thead>
                    <tr>
                      <th>Mã sản phẩm</th>
                      <th>Hình ảnh</th>
                      <th>Tên sản phẩm</th>
                      <th>Số lượng</th>
                      <th>Đơn giá</th>
                      <th>Thành tiền</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>{this.renderCartItem(this.props.cartData)}</tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
