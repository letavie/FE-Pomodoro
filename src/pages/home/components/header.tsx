import React from "react";
import logo from "../../../assets/podomoro.png";
import { Button } from "@/components/ui/button";
export default function Header() {
  return (
    <div className="vh-14 py-4 px-9 flex justify-between text-xl bg-white">
      <a href="/">
        <img className="h-10" src={logo} />
      </a>
      <div className="flex items-center gap-4">
        <div className="hover:text-secondary cursor-pointer">Contact us</div>
        <div className="hover:text-secondary cursor-pointer">Log in</div>
        <div>
          <Button className="bg-primary vh-10 w-28 font-bold hover:bg-secondary ">
            Try now
          </Button>
        </div>
      </div>
    </div>
  );
}
