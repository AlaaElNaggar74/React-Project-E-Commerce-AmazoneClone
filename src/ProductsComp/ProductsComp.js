import React from "react";
import { useStateValue } from "../Component/StateProvider/StateProvider";

import CopmonentStyle from "./ProductsComp.module.css";

const ProductsComp = ({ id, imagge, title, desc, price, rate }) => {
  let [{ basket }, dispatch] = useStateValue();
  let addToCart = () => {
    dispatch({
      type: "AddToCart",
      payload: {
        id:id,
        imagge:imagge,
        title:title,
        desc:desc,
        price:price,
        rate:rate,
      },
    });
  };
  return (
    <div className={CopmonentStyle.Products}>
      <img src={imagge} alt="Eroorrr" />
      <h4 className={CopmonentStyle.titl}>{title}Title</h4>
      <p className={CopmonentStyle.Des}>{desc} </p>
      <h5 className={CopmonentStyle.price}>{price} $</h5>
      <h5 className={CopmonentStyle.star}>
        {Array(rate)
          .fill()
          .map((_) => (
            <i
              key={Math.round(Math.random() * 1000000)}
              className="fa-solid fa-star"
            ></i>
          ))}
      </h5>

      <div className={CopmonentStyle.buttonss}>
        <button className={CopmonentStyle.addButt} onClick={addToCart}>
          AddToCart{" "}
        </button>
        <button className={CopmonentStyle.ShoButt}>ShowDetails </button>
      </div>
    </div>
  );
};

export default ProductsComp;
