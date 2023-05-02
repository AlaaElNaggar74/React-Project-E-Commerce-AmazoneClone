import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StateProvider } from "./Component/StateProvider/StateProvider";
import { BrowserRouter } from "react-router-dom";
import reducer, { initialState } from "./Component/StateProvider/Reducer";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SingInPage from "./Component/HomePage/HomePage";
// import NavBar from "./Component/NavBar/NavBar";
// import LoginPge from "./Component/LoginPge/LoginPge";
// import YourOrder from "./Component/YourOrder/YourOrder";
// import BasketShop from "./Component/BashetShop/BasketShop";
// import Prime from "./Component/Prime/Prime";
// import HomePage from "./Component/HomePage/HomePage";
// import OurProducts from "./Component/OurProducts.js/OurProducts";
// import { StateProvider } from "./Component/StateProvider/StateProvider";

// import reducer ,{initialState} from "./Component/StateProvider/Reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>

  <>
    <StateProvider reducer={reducer} initialState={initialState}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateProvider>
  </>

  // </React.StrictMode>
);
