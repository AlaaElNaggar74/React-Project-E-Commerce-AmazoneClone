import React from "react";
import ProductsComp from "../../ProductsComp/ProductsComp";

import OurProStyle from "./OurProducts.module.css";

import image from "../../assets/amazoneBach-2.jpg";
import image1 from "../../assets/OurProdcts-1.jpg";
import image2 from "../../assets/OurProdcts-2.jpg";
import image3 from "../../assets/OurProdcts-3.jpg";
import image4 from "../../assets/OurProdcts-4.jpg";
import image5 from "../../assets/OurProdcts-5.jpg";
import image6 from "../../assets/OurProdcts-6.jpg";
import image7 from "../../assets/OurProdcts-7.jpg";
import image8 from "../../assets/OurProdcts-8.jpg";
import image9 from "../../assets/OurProdcts-9.jpg";

const OurProducts = () => {
  return (
    <div className={OurProStyle.OurProdSecto}>
      <div className={`container`}>
        <div className={OurProStyle.headerTitle}>
          <h1> Our Products</h1>
          <p>Take Some Look For Our Products</p>
        </div>
        <div className={OurProStyle.firstSection}>
          <ProductsComp
            id={1}
            imagge={image1}
            price={8122.35}
            rate={3}
            title="Browse premium"
            desc="Hire a specialized team of product description writers that understand how search works and customers behave on the platform that you want to sell through"
          />
          <ProductsComp
            id={2}
            imagge={image2}
            price={2894.35}
            rate={5}
            title="Products stock photo"
            desc="All content, deadlines, publishing, and revisions managed by one point of contact."
          />
        </div>
        <div className={OurProStyle.secondSection}>
          <ProductsComp
            id={3}
            imagge={image3}
            price={375.2356}
            rate={2}
            title="Camera on, Sound"
            desc="Your project, your rules. Tell us how your process works and we'll adapt our process to create a seamless process for you."
          />
          <ProductsComp
            id={4}
            imagge={image4}
            price={63175.2}
            rate={3}
            title="Teacher recording video"
            desc="We offer unlimited revisions and give you all the time you need to provide feedback. The job won't be complete until you sign off on it"
          />
          <ProductsComp
            id={5}
            imagge={image5}
            price={369.2541253}
            rate={5}
            title="Men shoes in an "
            desc="Writers, editors, designers, and web developers. You name it, we got it! Tell you what you want and when you want it by - let us worry about the rest!"
          />
        </div>
        <div className={OurProStyle.thredSection}>
          <ProductsComp
            id={6}
            imagge={image6}
            price={498.23}
            rate={5}
            title="Woman's hand holding"
            desc="Please select your desired package to proceed with your trial order. If you need to place a larger order, please fill out"
          />
          <ProductsComp
            id={7}
            imagge={image7}
            price={786.21}
            rate={2}
            title="Man holding a purse"
            desc="We have product descriptions for businesses on an array of topics, including, but not limited to, the few listed below."
          />
          <ProductsComp
            id={8}
            imagge={image8}
            price={2356.231}
            rate={4}
            title="Cyclist drives on "
            desc="I came across CDP website, while I was searching the web for copywriters, for some packaging for a new product to be "
          />
          <ProductsComp
            id={9}
            imagge={image9}
            price={235.21}
            rate={2}
            title="cyclist in the city"
            desc="a no-brainer, and although the process took a few weeks, that was due to my feedback and changes, and"
          />
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
