import React from "react";
import { productsdata } from "../Products/Products/products";

export default function AllTshirts() {
  return (
    <div>
      <div></div>
      <div className="all-tshirt-container">
        {productsdata.map((i) => (
          <div className="tshirt-card" key={i}>
            <div className="tshirt-image">
              <img src={require("../Products/Products" + i.src_1)}></img>
            </div>
            <div className="tshirt-info">
              <p>{i.title}</p>
              <p>$ {i.price}</p>
              <button className="add-button">Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
