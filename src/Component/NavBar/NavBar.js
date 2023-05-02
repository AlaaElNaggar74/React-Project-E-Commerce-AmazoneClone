import React, { useContext, useState } from "react";

// import AcUnitIcon from '@material-ui/icons/AcUnit';
// import SearchIcon from '@material-ui/icons/Search';
import navStyle from "./NavBar.module.css";
import logo from "../../assets/Amazonl-logo.png";

import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider";
import { auth } from "../FiresBase/firebase";

const NavBar = () => {
  let [{ basket,user }] = useStateValue();
  let [searchInput, setSearchInput] = useState("");
  let [hellowSignIn, setHellowSignIn] = useState("Hellow");
  let navigate=useNavigate();

  let inputFunc = (e) => {
    setSearchInput(e.target.value);
  };

  let logout = () => {
    if (user) {
      auth.signOut().then((res)=>  navigate("/"));
    

    }
  };
  return (
    <div className={navStyle.NavBar}>
      <Link to="/" className={navStyle.NavBarImage}>
        <div>
          <img src={logo} alt="error"></img>
        </div>
      </Link>
      <div className={navStyle.searchDiv}>
        <input
          type="text"
          className={navStyle.searchInput}
          placeholder="Search Your Product"
          value={searchInput}
          onChange={inputFunc}
        />
        <span className={navStyle.iconn}>
          {" "}
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>
      <div className={navStyle.rightSideNave}>
        <Link to={!user && "/loginPge"}>
          <div onClick={logout}>
            {user? (
              <>
                <p>hellow ya {user?.email}</p>
                <h4>LogOut</h4>
              </>
            ) : (
              <>
                <p>hellow</p>
                <h4>LogIN</h4>
              </>
            )}
          </div>
        </Link>
        <Link to="/YourOrder">
          <div>
            <p>Return</p>
            <h4>$Order</h4>
          </div>
        </Link>
        <Link to="/prime">
          <div>
            <p>Your</p>
            <h4>Prim</h4>
          </div>
        </Link>
        <Link to="/basketShop">
          <div>
            <i className="fa-solid fa-cart-shopping"></i>
            <span>{basket && basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
