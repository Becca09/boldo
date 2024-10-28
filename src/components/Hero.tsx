import React from "react";
import Navbar from "./Navbar";
import SkeletonChart from "./SkeletonChart";
import { LinkOrButton } from "./LinkOrButton";
import ImageRow from "./ImageRow";
import Container from "./Container";

const Hero = () => {
  return (
    <div className="relative w-full bg-primary-50 overflow-hidden">
      <div className="lg:block absolute top-[-50px] right-[-50px] w-[600px] h-[600px] bg-secondary-200 rounded-bl-full hidden"></div>

      <Container maxWidth = {"2xl"}>
        <div className="lg:p-10 relative z-10">
          <Navbar />

          <div className="lg:mt-10 lg:p-10">
            <div className="lg:flex lg:flex-row lg:justify-between">
              <div className=" text-white p-4 mt-3  lg:text-left text-center lg:w-[700px]">
                <h1 className="font-light lg:text-[65px] text-[30px]">
                  Save time by building fast with Boldo Template
                </h1>
                <h1 className=" lg:text-[20px] font-extralight mt-2 ">
                  Funding handshake buyer business-to-business metrics iPad
                  partnership. First mover advantage innovator success
                  deployment non-disclosure.
                </h1>
                <div className="flex flex-row gap-10 mt-10 mx-3 lg:mx-0">
                  <LinkOrButton className="bg-primary-100 text-primary-50 rounded-full">
                    Buy Template
                  </LinkOrButton>
                  <LinkOrButton className="border border-white rounded-full">
                    Explore
                  </LinkOrButton>
                </div>
              </div>
              <div>
                <SkeletonChart />
              </div>
            </div>
          </div>

          <div className="overflow-hidden whitespace-nowrap my-5">
            <div className="flex gap-10 animate-scroll">
              <ImageRow />
              <ImageRow />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
