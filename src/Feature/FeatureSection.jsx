import React from "react";
import star from "../assets/bulb.svg";
import chat from "../assets/thumb.svg";
import clock from "../assets/book.svg";
import worldMap from "../assets/world-map.svg";
import chart from "../assets/chart.svg";
import pfp1 from "../assets/pfp1.png";
import pfp2 from "../assets/pfp2.png";
import pfp3 from "../assets/pfp3.png";

const jsonData = [
  {
    name: "Moana John",
    email: "moana_j@gmail.com",
    imageSrc: pfp1,
  },
  {
    name: "Moana John",
    email: "moana_j@gmail.com",
    imageSrc: pfp2,
  },
  {
    name: "Moana John",
    email: "moana_j@gmail.com",
    imageSrc: pfp3,
  },
];

function FeatureSection() {
  return (
    <section className="feature__section max-w-5xl px-7 lg:px-10 py-20 mx-auto ">
      <div className="flex flex-col gap-y-2.5 items-center justify-center">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center">
          Use Posty for direct mail and it works crazy
        </h2>
        <p className="text-center max-w-lg mx-auto">
          Easily manage your marketing sales across the world with in your
          finger tips, over 72+ countries are using our platform
        </p>
      </div>
      <div className="py-10">
        <div className="grid grid-cols-1 items-center lg:grid-cols-5 lg:gap-x-5 gap-y-10">
          <div className="flex flex-col justify-evenly h-full lg:h-[calc(100%-80px)] gap-y-10 bg-[#295D4E]/10 p-10 rounded-lg col-span-2">
            <div className="flex flex-col gap-y-2 ">
              <p className="font-bold text-4xl">120X</p>
              <p>Higher read response rate from posty</p>
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="font-bold text-4xl">120X</p>
              <p>Higher read response rate from posty</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-10 h-fit bg-[#295D4E] rounded-lg col-span-3">
            <div className="flex items-center justify-center gap-y-2 p-10 ">
              <p className="text-center max-w-sm mx-auto text-white">
                Cut through the digital clutter, Posty campaigns get 98% of read
                rate & engagement
              </p>
            </div>
            <div className="px-10 flex items-end justify-between gap-x-5">
              <div className="h-[250px] w-32 bg-sky-50 rounded-tl-[20px] rounded-tr-[20px] border relative">
                <p className="absolute flex items-center justify-center text-3xl font-bold top-5 left-1/2 transform -translate-x-1/2 text-[#295D4E]">
                  98%
                </p>
              </div>
              <div className="h-[200px] w-32 bg-sky-50/20 rounded-tl-[20px] rounded-tr-[20px] border border-slate-500/20 relative">
                <p className="absolute flex items-center justify-center text-3xl font-bold top-5 left-1/2 transform -translate-x-1/2 text-white">
                  20%
                </p>
              </div>
              <div className="h-[110px] w-32 bg-sky-50/20 rounded-tl-[20px] rounded-tr-[20px] border border-slate-500/20 relative">
                <p className="absolute flex items-center justify-center text-3xl font-bold top-5 left-1/2 transform -translate-x-1/2 text-white">
                  20%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-y-10 items-start justify-between gap-x-10">
        <div className="bg-[#295D4E]/10 p-5 rounded-lg w-full lg:w-1/3 ">
          <p className="font-semibold">First purchase</p>
          <div className="flex flex-col gap-y-2 pt-5">
            {jsonData.map((item, index) => (
              <div className="flex items-center gap-x-2" key={index}>
                <img className="w-12 h-auto" src={item.imageSrc} alt="" />
                <div>
                  <p>{item.name}</p>
                  <p className="text-sm text-slate-700/50">{item.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#295D4E]/10 p-5 rounded-lg w-full lg:w-1/3">
          <p className="font-semibold">All Users</p>
          <div className="grid grid-cols-3 gap-5 w-fit mx-auto pt-5">
            <img src={pfp1} alt="" />
            <img src={pfp1} alt="" />
            <img src={pfp1} alt="" />
            <img src={pfp1} alt="" />
            <img src={pfp1} alt="" />
            <img src={pfp1} alt="" />
          </div>
        </div>
        <div className="bg-[#295D4E] p-5 rounded-lg w-full lg:w-1/3 ">
          <p className="font-semibold text-white">Sortings</p>
          <div className="flex flex-col gap-y-5 pt-5">
            <div className="bg-sky-50/20 p-3.5 rounded-lg w-full">
              <p className="text-white">VIP Audience</p>
            </div>
            <div className="bg-sky-50/20 p-3.5 rounded-lg w-full">
              <p className="text-white">VIP Audience</p>
            </div>
            <div className="bg-sky-50/20 p-3.5 rounded-lg w-full">
              <p className="text-white">VIP Audience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
