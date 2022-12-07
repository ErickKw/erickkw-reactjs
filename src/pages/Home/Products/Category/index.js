import "./style.css";
import React, { useEffect, useState } from "react";

function Category() {
  const [category, setCategory] = useState([]);

  const categoryApi = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  };

  useEffect(() => {
    categoryApi();
  }, []);

  return (
    <div className="row-category">
      <label>Choose Category</label>
      <select name="">
        {category.map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </select>
    </div>
  );
}

export default Category;
