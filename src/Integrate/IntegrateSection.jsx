import React from "react";
import integrateImage from "../assets/integrateImge.svg";
export default function IntegrateSection() {
  return (
    <section className="max-w-5xl mx-auto bg-[#DEE9EA] py-10 lg:rounded-xl">
      <div className="flex items-center flex-col gap-y-5 lg:flex-row justify-between gap-x-5">
        <div className="px-10 w-full lg:w-1/2 flex flex-col gap-y-2">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-[#295D4E] max-w-sm mx-0">
            Top level integration for every user
          </h2>
          <p className="text-sm text-[#343E3A]">
            BePrepared is a secure, white-labelled digital vault used to
            confidentially store and distribute your clients' cryptocurrency,
            passwords
          </p>
        </div>
        <div className=" overflow-hidden w-full lg:w-1/2">
          <img src={integrateImage} alt="" />
        </div>
      </div>
    </section>
  );
}
