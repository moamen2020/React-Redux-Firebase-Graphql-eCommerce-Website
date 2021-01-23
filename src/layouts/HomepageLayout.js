import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const HomepageLayout = (props) => {
  return (
    <div style={{ height: "100%" }}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default HomepageLayout;
