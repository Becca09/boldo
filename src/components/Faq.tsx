import React from "react";
import Image from "next/image";

const Faq = () => {
  return (
    <div className="flex flex-col items-center lg:p-24 p-8 ">
      <div className="flex flex-col w-full">
        <div className="w-full">
          <Image
            src="/assets/images/faq.jpg"
            alt="Office"
            width={800}
            height={800}
            className="h-full w-full"
          />
        </div>
        <div className="w-full p-6 flex lg:flex-row flex-col justify-between mt-5">
          <h2 className="lg:text-4xl text-center lg:text-left font-medium mb-4 lg:w-[500px] text-primary-50">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h2>
          <div className="space-y-4 lg:w-[560px] text-primary-50">
            <div className="border-b pb-2 cursor-pointer hover:text-secondary-100 flex flex-row items-center justify-between">
              <span className="lg:text-2xl">
                We connect our customers with the best?
              </span>
              <Image
                src="/assets/images/dropdown.png"
                alt={"faq"}
                width={20}
                height={20}
              />
            </div>
            <div className="border-b pb-2 cursor-pointer hover:text-secondary-100 flex flex-row items-center justify-between">
              <span className="lg:text-2xl">
                Android research & development rockstar?
              </span>
              <Image
                src="/assets/images/dropdown.png"
                alt={"faq"}
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
