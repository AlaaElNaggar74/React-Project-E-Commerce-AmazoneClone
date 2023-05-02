import React from "react";

import singInStyle from "./HomePage.module.css";

import image from "../../assets/amazoneBach-1.jpeg"


const HomePage = () => {
  return <div className={singInStyle.mainTage}>
    <div className={singInStyle.ImageHome}>
      <img src={image} alt="Erorr"/>
    </div>


  </div>;
};

export default HomePage;
