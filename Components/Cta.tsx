import Image from "next/image";
import React from "react";

const Cta = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-4 sm:mx-10">
      {/* Image */}
      <div className="">
        <Image
          src={"/images/cta-img.png"}
          alt="cta image"
          width={409}
          height={400}
          className="w-full sm:w-xl h-full object-cover sm:rounded-2xl"
        />
      </div>
      {/* Content */}
      <div className="bg-primary-600 text-white p-16 w-full sm:rounded-2xl relative overflow-hidden">
        <Image
          src={"/images/shape-3.svg"}
          alt="cta image"
          width={250}
          height={500}
          className="w-auto absolute top-30 right-0 z-10"
        />
        <h2 className="title max-w-xl relative z-20">
          Get Started Today Virtual or In Person Appointments Available
        </h2>
        <button className="secondary-btn bg-white text-black/80 rounded-2xl hover:bg-white/90 transition-colors font-semibold mt-11 lg:mt-14 relative z-30">
          BOOK APPOINTMENT
        </button>
      </div>
    </div>
  );
};

export default Cta;
