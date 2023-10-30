import React from "react";
import Navbar from "../Navbar";
import company1 from "../assets/company-1.svg";
import company2 from "../assets/company-2.svg";
import company3 from "../assets/company-3.svg";
import company4 from "../assets/company-4.svg";
import heroImage1 from "../assets/heroImage-1.jpg";
import heroImage3 from "../assets/heroImage-3.jpg";
import heroImage2 from "../assets/heroImage2.svg";

function HeroSection() {
  return (
    <section className="hero__section">
      <Navbar />
      <div className="hero__container px-7 lg:px-10 max-w-6xl mx-auto flex flex-col gap-y-10 lg:flex-row items-center gap-x-10 justify-center py-10 lg:py-24">
        <div className="hero-content lg:w-[650px] lg:px-5 flex flex-col gap-y-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl leading-[1.2] max-w-lg mx-auto text-center font-semibold text-[#325448]">
            Change your old marketing channel
          </h1>
          <p className="text-base md:max-w-xl md:mx-auto lg:mx-0 lg:max-w-full text-center">
            Squaree helps users to go from Zero to Hero with Pockets flow's
            simple platform that helps creators like you sell their digital
            products online.
          </p>
          <button className="text-white w-fit mx-auto bg-[#295D4E] py-2 px-5 rounded-lg">
            Try for free
          </button>
        </div>
      </div>

      <div className=" flex flex-col lg:flex-row gap-5 items-start justify-center p-10 max-w-6xl mx-auto rounded-none lg:rounded-2xl overflow-hidden">
        <img className="rounded-xl" src={heroImage1} alt="" />
        <img className="lg:mt-14" src={heroImage2} alt="" />
        <img className="rounded-xl" src={heroImage3} alt="" />
      </div>

      <div className=" py-5">
        <div className="testimonial-company flex flex-col gap-y-5 lg:gap-y-10 items-center justify-center py-5">
          <p className="text-base text-center text-slate-600/70 lg:text-xl font-medium px-20">
            We have the fast-paced growing companies with us
          </p>
        </div>
        <div className="company-logo flex flex-wrap items-center max-w-[20rem] lg:max-w-4xl mx-auto justify-center gap-y-5 gap-x-10 lg:gap-x-24 py-5">
          <img
            className="h-10 w-28 lg:h-auto lg:w-auto"
            src={company1}
            alt=""
          />
          <img
            className="h-10 w-28 lg:h-auto lg:w-auto"
            src={company2}
            alt=""
          />
          <img
            className="h-10 w-28 lg:h-auto lg:w-auto"
            src={company3}
            alt=""
          />
          <img
            className="h-10 w-28 lg:h-auto lg:w-auto"
            src={company4}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
