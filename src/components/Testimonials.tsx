"use client";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Container from "./Container";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = [
    {
      customer: "Albus Dumbledore",
      description:
        "“Buyer buzz partner network disruptive non-disclosure agreement business”",
      image: "/assets/images/albus.png",
      Role: "Manager @ Howarts",
    },
    {
      customer: "Severus Snape",
      description:
        "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
      image: "/assets/images/severus.png",
      Role: "Manager @ Slytherin",
    },
    {
      customer: "Harry Potter",
      description:
        "“Release facebook responsive web design business model canvas seed money monetization.”",
      image: "/assets/images/harry.png",
      Role: "Team Leader @ Gryffindor",
    },
  ];

  const handleNext = () => {
    if (currentIndex === 1) return;
    setCurrentIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    if (currentIndex === 0) return;
    setCurrentIndex(currentIndex - 1);
  };

  const chunkedReviews = [];
  for (let i = 0; i < reviews.length; i += 3) {
    chunkedReviews.push(reviews.slice(i, i + 3));
  }

  return (
    <div className="bg-primary-50 lg:p-24 p-14 lg:mt-40">
      <Container maxWidth={"xl"}>
        <div className="flex lg:flex-row flex-col items-center lg:justify-between">
          <h1 className="lg:text-5xl lg:w-[800px] text-white lg:text-left text-center ">
            An enterprise template to ramp up your company website
          </h1>

          <div className="flex flex-row gap-5 lg:hidden my-3">
            <div onClick={handlePrev} className="cursor-pointer">
              <Image
                src="/assets/images/left.png"
                alt={"connect"}
                width={30}
                height={30}
              />
            </div>
            <div onClick={handleNext} className="cursor-pointer">
              <Image
                src="/assets/images/right.png"
                alt={"connect"}
                width={30}
                height={30}
              />
            </div>
          </div>

          <div className="lg:flex flex-row gap-5 hidden  my-3">
            {" "}
            <div onClick={handlePrev} className="cursor-pointer">
              <Image
                src="/assets/images/left.png"
                alt={"connect"}
                width={70}
                height={70}
              />
            </div>
            <div onClick={handleNext} className="cursor-pointer">
              <Image
                src="/assets/images/right.png"
                alt={"connect"}
                width={70}
                height={70}
              />
            </div>
          </div>
        </div>
        <div className="mt-10 hidden lg:block">
          <Carousel
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            autoPlay
            stopOnHover
            selectedItem={currentIndex}
          >
            <div className="lg:block hidden">
              {chunkedReviews.map((reviewGroup, index) => (
                <div key={index} className="flex gap-7">
                  {reviewGroup.map((review, idx) => (
                    <div
                      key={idx}
                      className="bg-white py-7 px-14 rounded-xl text-left"
                    >
                      <p className="text-primary-50 text-2xl font-normal">
                        {review.description}
                      </p>
                      <div className="flex mt-10">
                        <div>
                          <Image
                            src={review.image}
                            alt={review.customer}
                            width={50}
                            height={50}
                          />
                        </div>

                        <div className="ml-3">
                          <h3 className="">{review.customer}</h3>
                          <p className="text-sm">{review.Role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="">
              {chunkedReviews.map((reviewGroup, index) => (
                <div key={index} className="flex gap-7">
                  {reviewGroup.map((review, idx) => (
                    <div
                      key={idx}
                      className="bg-white py-7 px-14 rounded-xl text-left"
                    >
                      <p className="text-primary-50 text-2xl font-normal">
                        {review.description}
                      </p>
                      <div className="flex mt-10">
                        <div>
                          <Image
                            src={review.image}
                            alt={review.customer}
                            width={50}
                            height={50}
                          />
                        </div>

                        <div className="ml-3">
                          <h3 className="">{review.customer}</h3>
                          <p className="text-sm">{review.Role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Carousel>
        </div>

        <div className="lg:hidden lg:mt-0 mt-10">
          <Carousel
            showArrows={false}
            showIndicators={false} 
            showStatus={false}
            autoPlay
            stopOnHover
            selectedItem={currentIndex}
            className="max-w-md mx-auto"
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white py-5 px-6 rounded-xl text-left"
              >
                <p className="text-primary-50 text-lg md:text-2xl font-normal mb-4">
                  {review.description}
                </p>
                <div className="flex items-center">
                  <div>
                    {" "}
                    <Image
                      src={review.image}
                      alt={review.customer}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>

                  <div className="ml-3">
                    <h3 className="font-semibold">{review.customer}</h3>
                    <p className="text-sm text-gray-500">{review.Role}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
