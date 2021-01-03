import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card";
import PRODUCT_LIST from "./data/product_list";
import { lightTheme, darkTheme } from "./theme/theme";
import Navbar from "./components/Navbar";


export default function App() {
  const colSize = 6;
  
  const [themeData, setTheme] = React.useState(lightTheme);

  function changeTheme() {
    setTheme(themeData.theme === "light" ? darkTheme : lightTheme);
  }

  const product_list = PRODUCT_LIST.map(item => (
    <div className={`col-sm-4 mb-2 mt-3`}>
      <Card item={item} themeData={themeData} />
    </div>
  ));

  const ProductList = PRODUCT_LIST.map(item => (
    <div className={`col-sm-${colSize} mb-2`}>
      <Card item={item} />
    </div>
  ));

  return (
    <div>
      <h1 className="text-center">Watches Store</h1>
      <div className={`${themeData.bgColor} ${themeData.textColor}`}>
      <Navbar themeData={themeData} changeTheme={changeTheme} />
      <div className="container">
        <div className="row">{product_list}</div>
      </div>
    </div>
     </div>
  );}