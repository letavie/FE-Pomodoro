import React from "react";
import Pomodoro from "./pomodoro";
import bg from "../../../assets/backlog-issue-tracking-hero.webp";
import { Button } from "@/components/ui/button";
export default function Body() {
  return (
    <>
      <div className="gap-4 mt-40 px-10 flex justify-center flex-row">
        <Pomodoro />
        <div className="flex items-center justify-items-center flex-col ">
          <h1 className="text-5xl font-bold ">
            One tool for time management, Pomodoro
          </h1>
          <h2 className="text-3xl font-bold mt-10 ">
            Backlog is the issue management tool for creators
          </h2>
        </div>

        <div className="float-right">
          <img src={bg} alt="" />
        </div>
      </div>

      <div className="flex justify-center">{/* <Animation /> */}</div>
      <div className="bg-primary h-[45vh] py-[35vh] px-4 flex items-center justify-center flex-col space-y-3 text-white">
        <div className="font-bold text-5xl mb-3">
          Join the 3 million users who rely on
        </div>
        <div className="font-bold text-5xl">Backlog for Issue Tracking</div>
        <div className="font-bold ">
          Try Backlog today for free, No credit card required.
        </div>

        <Button className="bg-white text-primary hover:bg-slate-100">
          Try it free
        </Button>
      </div>
    </>
  );
}
