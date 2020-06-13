import React from "react";
import { productsdata } from "../Products/Products/products";
import cart from "../Products/Products/Icons/cart.png";
export default function AllTshirts() {
  return (
    <div>
      <button className="shop-button">
        <img src={cart}></img>
      </button>
      <div className="container">
        <div className="size-filter">
          <p>SIZES</p>
          <button>XS</button>
          <button>S</button>
          <button>M</button>
          <button>ML</button>
          <button>XL</button>
          <button>XXL</button>
        </div>
        <div className="all-tshirt-container">
          {productsdata.map((i) => (
            <div className="tshirt-card" key={i}>
              <div className="tshirt-image">
                <img src={require("../Products/Products" + i.src_1)}></img>
                {i.isFreeShipping && (
                  <div className="free-shipping">Free Shipping</div>
                )}
              </div>

              <div className="tshirt-info">
                <p>{i.title}</p>
                <div className="dash"></div>
                <div className="price-info">
                  <span>$</span>
                  <span>{Math.floor(i.price)}</span>
                  <span>
                    {i.price.toString().split(".")[1]
                      ? ". " + i.price.toString().split(".")[1]
                      : ""}
                  </span>
                </div>
                <button className="add-button">Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
