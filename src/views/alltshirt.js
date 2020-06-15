import React, { useState, useEffect } from "react";
import { productsdata } from "../Products/Products/products";
import cart from "../Products/Products/Icons/cart.png";
export default function AllTshirts() {
  const [shirts, setShirts] = useState(productsdata);
  const [orderBy, setOrderBy] = useState("descend");
  function handleFilter(e) {
    setOrderBy(e.target.value);

    if (orderBy === "descend") {
      const sorted = [...shirts].sort((a, b) => {
        return a.price - b.price;
      });
      setShirts(sorted);
    }

    if (orderBy === "ascend") {
      const sorted = [...shirts].sort((a, b) => {
        return b.price - a.price;
      });
      setShirts(sorted);
    }
  }

  return (
    <div>
      <>
        <div className="top-bar">
          <div className="size-title">SIZES</div>
          <div className="products-title">? Products Found</div>
          <div className="price-filter">
            Order by:{" "}
            <select className="filter" onChange={handleFilter}>
              <option value="descend">Highest to Lowest</option>
              <option value="ascend">Lowest to Highest</option>
            </select>
          </div>
        </div>

        <button className="shop-button">
          <img src={cart}></img>
        </button>

        <div className="container">
          <div className="size-filter">
            <button>XS</button>
            <button>S</button>
            <button>M</button>
            <button>ML</button>
            <button>XL</button>
            <button>XXL</button>
          </div>
          <div className="all-tshirt-container">
            {shirts.map((i) => (
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
      </>
    </div>
  );
}
