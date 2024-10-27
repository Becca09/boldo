"use client";

import React, { useState } from "react";
import { GreenLogo } from "./Logo";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const LI1 = [
    { label: "Product", href: "/product" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
  ];

  return (
    <>
      <div className="flex flex-row justify-between p-4">
        <div>
          <GreenLogo />
        </div>
        <div className="relative lg:hidden">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            <Image
              src="/assets/images/hamburger.png"
              alt={"logo"}
              width={40}
              height={40}
            />
          </button>
          {isMobileMenuOpen && (
            <>
              <ul className="absolute right-0 mt-2 p-4 bg-secondary-200 rounded shadow-lg border-r border-slate-400">
                {LI1.map((item, index) => (
                  <li
                    key={index}
                    className="cursor-pointer border-b border-primary-100 my-3 border-slate-400 text-white font-medium hover:text-primary-100"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}

                <div className="mt-4 bg-white font-medium cursor-pointer hover:bg-primary-50 hover:text-primary-100 rounded-full w-20 h-10 flex items-center justify-center">
                  Login
                </div>
              </ul>
            </>
          )}
        </div>

        <div className="lg:flex lg:flex-row gap-5 hidden ">
          <ul className="flex gap-5">
            {LI1.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer text-white font-medium hover:text-primary-100"
              >
                <Link
                  href={item.href}
                  className="flex flex-col justify-center items-center"
                >
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="bg-white font-medium cursor-pointer hover:bg-primary-50 hover:text-primary-100 rounded-full w-7 h-7 flex items-center justify-center px-10">
            Login
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
