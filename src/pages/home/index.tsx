import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Body from "./components/body";
export default function Home() {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0">
        {" "}
        <Header />
      </div>
      <Body />
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
