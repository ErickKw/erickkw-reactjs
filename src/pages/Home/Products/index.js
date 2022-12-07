import React, { useEffect, useState } from "react";
import "./style.css";

function Products() {
  const [productItems, setItems] = useState([]);

  const productApi = () => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setItems(data));
  };

  useEffect(() => {
    productApi();
  }, []);

  return (
    <div className="card">
      {productItems.map((item) => (
        <div className="card_product">
          <a href="">
            <img className="card__img" src={item.image} alt="product" />
            <h2>{item.title}</h2>
          </a>
          <p>{item.description}</p>
          <h3>Category: {item.category}</h3>
          <span className="price">Price: {item.price}</span>
          <button className="buy-btn">Buy Now</button>
        </div>
      ))}
    </div>
  );
}
export default Products;
