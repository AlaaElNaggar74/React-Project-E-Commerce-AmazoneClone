import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingInPage from "./Component/HomePage/HomePage";
import NavBar from "./Component/NavBar/NavBar";
import LoginPge from "./Component/LoginPge/LoginPge";
import YourOrder from "./Component/YourOrder/YourOrder";
import BasketShop from "./Component/BashetShop/BasketShop";
import Prime from "./Component/Prime/Prime";
import HomePage from "./Component/HomePage/HomePage";
import OurProducts from "./Component/OurProducts.js/OurProducts";
import {
  StateProvider,
  useStateValue,
} from "./Component/StateProvider/StateProvider";

import reducer, { initialState } from "./Component/StateProvider/Reducer";
import { useEffect } from "react";
import { auth } from "./Component/FiresBase/firebase";

function App() {
  let [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "checkUser",
          payload: authUser,
        });
      } else {
        dispatch({
          type: "checkUser",
          payload: null,
        });
      }
    });
  }, []);

  console.log("user is ",user);
  return (
    // <StateProvider reducer={reducer} initialState={initialState}>

    //   <BrowserRouter>
    <>
      {" "}
      <NavBar />
      <Routes>
        {/* <div className="app"> */}

        <Route
          path="/"
          element={
            <>
              <HomePage />
              <OurProducts />
            </>
          }
        />
        <Route
          path="/loginPge"
          element={
            <>
              <LoginPge />
            </>
          }
        />
        <Route
          path="/basketShop"
          element={
            <>
              <BasketShop />
            </>
          }
        />
        <Route
          path="/YourOrder"
          element={
            <>
              <YourOrder />
            </>
          }
        />
        <Route
          path="/prime"
          element={
            <>
              <Prime />
            </>
          }
        />
        {/* </div> */}
      </Routes>
    </>

    //   </BrowserRouter>
    // </StateProvider>
  );
}

export default App;
