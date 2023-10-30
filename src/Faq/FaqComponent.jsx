import React from "react";
import FaqData from "./FaqData";
import { Disclosure } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";

export default function Faq() {
  return (
    <div className="w-full px-7 md:px-10 xl:px-2 py-5">
      <div className="mx-auto w-full max-w-4xl rounded-lg">
        {FaqData.map((faq, index) => (
          <Disclosure key={faq.id}>
            {({ open }) => (
              <div
                className={`${
                  index !== FaqData.length + 1
                    ? "border border-[#0A071B]/10 bg-white py-1.5 px-3 rounded-lg mb-2"
                    : ""
                }`}
              >
                <Disclosure.Button className="py-2.5 flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold text-slate-800 focus:outline-none">
                  <span>{faq.question}</span>
                  <BiChevronDown
                    className={` mt-1.5 md:mt-0 flex-shrink-0 ${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-[#5B5675]`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="pt-2 pb-2 pr-5 text-sm lg:text-base text-[#343E3A] font-medium">
                  {faq.answer}
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
