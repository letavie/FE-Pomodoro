import React from "react";
import tavie2 from "../../../assets/tavie2.png";
import fb from "../../../assets/facebook2.svg";
import ytb from "../../../assets/youtube2.svg";
import git from "../../../assets/github2.svg";
import ins from "../../../assets/instagram2.svg";
import x from "../../../assets/x-twitter2.svg";
import glo from "../../../assets/globe.svg";

export default function Footer() {
  return (
    <div className="p-10  ">
      <div className="flex justify-between items-center mb-12">
        <img src={tavie2} alt="logo" className="h-9" />
        <div className="flex gap-4 items-center">
          <a href="https://www.facebook.com/nohacknick">
            <img src={fb} width={30} className=" " />
          </a>
          <a href="">
            <img src={ytb} width={30} className="" />
          </a>
          <a href="https://github.com/letavie">
            <img src={git} width={30} />
          </a>
          <a href="">
            <img src={ins} width={30} />
          </a>
          <a href="">
            <img src={x} width={30} />
          </a>
        </div>
      </div>
      <div className="flex justify-between items-center ">
        <div className="flex justify-between items-center gap-2">
          <img src={glo} width={20} alt="" />
          English
        </div>
        <div className="flex gap-4 items-center">
          <div>Privacy Policy</div>
          <div>Terms of Service</div>
          <div>© All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
}
