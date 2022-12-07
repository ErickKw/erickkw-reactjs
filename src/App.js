// import axios from "axios";
import "./App.css";
import Home from "./pages/Home/";
import Register from "./pages/Home/Auth/Register";
import Signin from "./pages/Home/Auth/Signin";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Products from "./pages/Home/Products";
import React, { useState } from "react";
import Category from "./pages/Home/Products/Category";

function App() {
  const [getMenu, setMenu] = useState(1);

  const getContent = () => {
    if (getMenu === 1) {
      return <Home />;
    } else if (getMenu === 2) {
      return <Register />;
    } else if (getMenu === 3) {
      return <Signin />;
    }
  };

  // const itmesFilter = productItems.filter((item) =>
  //   item.title.toLowerCase().includes(searchValue.toLowerCase())
  // );

  return (
    <div className="App">
      <Header onClick={setMenu} />
      <Category />
      {getContent()}
    </div>
  );
}

export default App;
