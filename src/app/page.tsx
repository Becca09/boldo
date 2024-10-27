import Blog from "@/components/Blog";
import CustomerConnect from "@/components/CustomerConnect";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices";
import Testimonials from "@/components/Testimonials";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <OurServices />
      <CustomerConnect/>
      <Testimonials/>
      <Faq/>
      <Blog/>
    </>
  );
};

export default page;
