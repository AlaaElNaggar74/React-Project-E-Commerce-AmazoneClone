import React from "react";
import { useStateValue } from "../StateProvider/StateProvider";
import basketStyle from "./BasketShop.module.css";

import imageBas from "../../assets/basketBaground.jpg";
import emptyBas from "../../assets/emptyBasketxxx.png";

import Swal from "sweetalert2";

const BasketShop = () => {
  let [{ basket }, dispatch] = useStateValue();

  let totalPrice = basket.reduce(
    (accu, ele) => (accu += ele.price * ele.count),
    0
  );

  let RemoveProduct = (element) => {
    // console.log(element)
    Swal.fire({
      title: `You Will Delete [ ${element.title} ] ? `,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        dispatch({ type: "RemoveToCart", payload: element });
      }
    });
  
  };

  let ClearAll = () => {
    dispatch({ type: "clearAll" });
  };

  return (
    <div className={basketStyle.BasketShop}>
      <div className="container">
        <div className={basketStyle.header}>
          <h3 className={basketStyle.firstHead}>
            CheckOut Page .. Your Basket Contain..{" "}
          </h3>
          <h3>
            Total Price Of Your Order{" "}
            <span className={basketStyle.totalPrice}>
              {totalPrice.toFixed(2)} $
            </span>
          </h3>
        {
          basket?.length ===0?"":<button
          className={basketStyle.clearAll}
          onClick={() => {
            ClearAll();
          }}
        >
          Clear All Product{" "}
        </button>
        }
        </div>
        <div className={basketStyle.imagggaBas}>
          <img src={imageBas} alt="errrrorr" />
        </div>
        {basket?.length === 0 ? (
          <div className={basketStyle.basketimpty}>
            <img src={emptyBas} alt="errrorr" />
          </div>
        ) : (
          basket?.map((ele) => (
            <div key={ele.id} className={basketStyle.boobo}>
              <img src={ele.imagge} alt="erroo" />
              <div className={basketStyle.text}>
                <div className={basketStyle.headerAndCount}>
                  <h4 className={basketStyle.titl}>{ele.title}Title</h4>
                  <h5>Count: {ele.count ? ele.count : "0"} item</h5>
                </div>
                <p className={basketStyle.Des}>{ele.desc} </p>
                <h5 className={basketStyle.price}>{ele.price} $</h5>
                <h5 className={basketStyle.star}>
                  {Array(ele.rate)
                    .fill()
                    .map((_) => (
                      <i
                        key={Math.round(Math.random() * 1000000)}
                        className="fa-solid fa-star"
                      ></i>
                    ))}
                </h5>

                <div className={basketStyle.buttonss}>
                  <button
                    className={basketStyle.addButt}
                    onClick={() => {
                      RemoveProduct(ele);
                    }}
                  >
                    RemoveFromCart{" "}
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BasketShop;
