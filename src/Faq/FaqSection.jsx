import React from "react";
import FaqComponent from "./FaqComponent";
import faqImage from "../assets/faqimage.jpg";

function FaqSection() {
  return (
    <section className="faq__section max-w-5xl mx-auto py-10">
      <div className="w-full">
        <div className="faq-headline flex flex-col gap-y-2">
          <h3 className="text-2xl md:text-3xl lg:text-4xl max-w-xs mx-auto md:max-w-full md:mx-0 text-center font-bold leading-[1.15] text-black">
            We have every answer for you
          </h3>
        </div>
        {/* Actual faq component with accordion */}
        <div className="lg:mt-5">
          <FaqComponent />
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
