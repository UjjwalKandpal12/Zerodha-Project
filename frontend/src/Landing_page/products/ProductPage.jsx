import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
function ProductPage() {
  const productDescription = (
    <>
      Our ultra-fast flagship trading platform with streaming market data,
      advanced charts, an elegant UI, and more. Enjoy the Kite <br /> experience
      seamlessly on your Android and IOS devices.
    </>
  );
  return (
    <>
      <Hero />
      <LeftSection
        imageUrl="media/images/kite.png"
        productName="Kite"
        ProductDescription={productDescription}
        tryDemo="#"
        learnMore="#"
        googlePlay="media/images/googlePlayBadge.svg"
        appStore="media/images/appstoreBadge.svg"
      />
      <RightSection
        imageUrl="media/images/kiteConnect.png"
        productName="Kite Connect API"
        ProductDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        kiteConnect="/"
        learnMore="/"
        boolean={true}
      />
      <LeftSection
        imageUrl="media/images/coin.png"
        productName="Coin"
        ProductDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="#"
        learnMore="#"
        googlePlay="media/images/googlePlayBadge.svg"
        appStore="media/images/appstoreBadge.svg"
      />
      <RightSection
        imageUrl="media/images/console.png"
        productName="Console"
        ProductDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        kiteConnect="/"
        learnMore="/"
        boolean={false}
      />
      <LeftSection
        imageUrl="media/images/varsity.png"
        productName="Varsity"
        ProductDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo="#"
        learnMore="#"
        boolean={false}
        googlePlay="media/images/googlePlayBadge.svg"
        appStore="media/images/appstoreBadge.svg"
      />
      <p className="text-center fs-5 mt-5 pt-4 mb-5" style={{color:"#424242"}}>
        Want to know more about our technology stack? Check out the{" "}
        <a href="/">Zerodha.tech</a> blog.
      </p>
      <Universe />
    </>
  );
}

export default ProductPage;
