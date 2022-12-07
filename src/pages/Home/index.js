import Content from "./fragments/content";
import Sidebar from "./fragments/sidebar/sidebar";
import Footer from "../../component/Footer";
import Products from "./Products";
// import Auth from "./fragments/auth/signin";
import "./style.css";

function Home() {
  return (
    <div className="content-container">
      <Products />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default Home;
