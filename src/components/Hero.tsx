import React from "react";
import { EnergyData } from "../types";
import { formatDate } from "../utils/dataFormat";

export const Hero = ({ data }: { data: EnergyData }) => {
  return (
    <section className="Hero">
      <h1 className="Hero-title">UK Energy Mix</h1>
      <p className="Hero-subtitle">
        This is a simple app to show the UK energy mix
      </p>
      <div className="Hero-from-to">
        <div className="Hero-from-to-card">
          <header className="">
            <p className="">From</p>
          </header>
          <div className="">
            <div className="">
              <p>{formatDate(data?.from)}</p>
            </div>
          </div>
        </div>
        <div className="Hero-from-to-card">
          <header className="">
            <p className="">To</p>
          </header>
          <div className="">
            <div className="">
              <p>{formatDate(data?.to)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
