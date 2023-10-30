import React from "react";
import question from "../assets/question.svg";
import book from "../assets/book.svg";
import trigger from "../assets/trigger.svg";

const BenefitData = [
  {
    image: question,
    title: "Single Platform",
    description: "We provide the most comprehensive approach to every user",
  },
  {
    image: book,
    title: "Best in class support",
    description: "We are there for you with quick & reliable responses from us",
  },
  {
    image: trigger,
    title: "Productivity in time",
    description: "Automated quick responses for everyone",
  },
];

function BenefitSection() {
  return (
    <section className="benefit__section max-w-5xl px-7 lg:px-10 py-20 mx-auto ">
      <h2 className="text-3xl font-bold md:text-4xl leading-[1.2] md:max-w-xl md:mx-auto text-center lg:max-w-full text-zinc-800 ">
        Posty success suvreys
      </h2>
      <p className="max-w-xl mx-auto text-center pt-2.5">
        Squaree helps users to go from Zero to Hero with Pockets flow's simple
        platform that helps creators like you sell their digital products
        online.
      </p>
      <div className="w-full pt-10 lg:w-full relative isolate flex flex-col md:flex-row items-center justify-center gap-y-3.5">
        {BenefitData.map(({ image, title, description }) => (
          <div
            key={title}
            className="group p-5 flex flex-col items-center justify-center gap-y-2.5 w-full hover:cursor-pointer"
          >
            <div className="bg-[#DEE9EA] rounded-full p-3.5">
              <img className="w-8 h-8" src={image} alt="" />
            </div>

            <h3 className="text-lg text-center font-semibold">{title}</h3>
            <p className="text-center text-sm text-slate-700/70">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BenefitSection;
