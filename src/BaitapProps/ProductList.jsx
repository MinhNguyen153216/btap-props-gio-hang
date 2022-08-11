import React, { Component } from "react";
import ProductItem from "./ProductItem";

const data = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
  },
];

export default class ProductList extends Component {
  state = {
    sanPham: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
  };

  changeStateChiTiet = (newState) => {
    this.setState({
      sanPham: newState,
    });
  };

  renderItems = () => {
    return data.map((item, index) => {
      return (
        <div className="col-4" key={index}>
          <ProductItem
            item={item}
            addToCart={this.props.addToCart}
            changeStateChiTiet={this.changeStateChiTiet}
          />
        </div>
      );
    });
  };

  render() {
    let { sanPham } = this.state;
    return (
      <div className="mb-5">
        <div className="row">{this.renderItems()}</div>
        <div className="row mt-3">
          <div className="col-5">
            <h3 className="text-center" style={{ width: "100%" }}>
              {sanPham.tenSP}
            </h3>
            <img src={sanPham.hinhAnh} alt="..." />
          </div>
          <div className="col-6 ms-4">
            <h3 className="mb-5">Thông số kỹ thuật</h3>
            <div className="row">
              <div className="col-6 p-0">
                <p className="border-top border-dark p-2">Màn Hình</p>
                <p className="border-top border-dark p-2">Hệ Điều Hành</p>
                <p className="border-top border-dark p-2">Camera Trước</p>
                <p className="border-top border-dark p-2">Camera Sau</p>
                <p className="border-top border-dark p-2">RAM</p>
                <p className="border-top border-dark p-2">ROM</p>
              </div>
              <div className="col-6 p-0">
                <p className="border-top border-dark p-2">{sanPham.manHinh}</p>
                <p className="border-top border-dark p-2">
                  {sanPham.heDieuHanh}
                </p>
                <p className="border-top border-dark p-2">
                  {sanPham.cameraTruoc}
                </p>
                <p className="border-top border-dark p-2">
                  {sanPham.cameraSau}
                </p>
                <p className="border-top border-dark p-2">{sanPham.ram}</p>
                <p className="border-top border-dark p-2">{sanPham.rom}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
