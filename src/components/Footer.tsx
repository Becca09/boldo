import React from "react";
import { BlueLogo } from "./Logo";
import { LinkOrButton } from "./LinkOrButton";

export default function Footer() {
  return (
    <div>
      <div className="bg-primary-50 lg:mx-24 p-14">
        <h3 className="lg:text-5xl text-center text-white">
          An enterprise template to ramp <br /> up your company website
        </h3>
        <div className="flex lg:flex-row flex-col justify-center items-center mt-10 gap-5">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 py-3 px-10 rounded-full focus:outline-none focus:border-primary-100"
          />
          <LinkOrButton
            isFull={false}
            className="bg-primary-100 text-primary-50 px-10 py-3 rounded-full  transition duration-200"
          >
            Subscribe
          </LinkOrButton>
        </div>
      </div>
      <footer className="bg-white text-gray-700 py-10  lg:px-40 px-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
          <div className="w-full md:w-1/3">
            <BlueLogo />{" "}
            <p className="mt-2 text-sm text-secondary-100 lg:w-[300px]">
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </p>
            <p className="mt-4 text-sm text-secondary-100">
              All rights reserved.
            </p>
          </div>

          <div className="w-full md:w-2/3 flex lg:justify-between gap-10">
            <div>
              <h3 className="text-md font-bold text-primary-50">Landings</h3>
              <ul className="mt-2 space-y-2 text-sm text-secondary-100">
                <li>Home</li>
                <li>Products</li>
                <li>Services</li>
              </ul>
            </div>

            <div>
              <h3 className="text-md font-bold text-primary-50">Company</h3>
              <ul className="mt-2 space-y-2 text-sm text-secondary-100">
                <li>Home</li>
                <li className="flex items-center space-x-2">
                  <span>Careers</span>
                  <span className="bg-primary-100 text-primary-50 text-xs font-bold px-2 py-0.5 rounded-full">
                    Hiring!
                  </span>
                </li>
                <li>Services</li>
              </ul>
            </div>

            <div>
              <h3 className="text-md font-bold text-primary-50">Resources</h3>
              <ul className="mt-2 space-y-2 text-sm text-secondary-100">
                <li>Blog</li>
                <li>Products</li>
                <li>Services</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
