import React from "react";
import Image from "next/image";
import Container from "./Container";

function OurServices() {
  const features = [
    {
      image: "/assets/images/cooleFeature.png",
      title: "Cool feature title",
      description: "Learning curve network effects return on investment.",
      linkText: "Explore page",
    },
    {
      image: "/assets/images/coolerFeature.png",
      title: "Even cooler feature",
      description: "Learning curve network effects return on investment.",
      linkText: "Explore page",
    },
    {
      image: "/assets/images/featureTitle.png",
      title: "Cool feature title",
      description: "Learning curve network effects return on investment.",
      linkText: "Explore page",
    },
  ];
  return (
    <>
      <Container maxWidth={"2xl"}>
        <div className="lg:p-5 mt-5">
          <div className="text-center">
            <h1 className="text-secondary-100">Our Services</h1>
            <h3 className="lg:text-[50px] mt-5">
              Handshake infographic mass market <br /> crowdfunding iteration.
            </h3>
          </div>

          <div className="flex lg:flex-row flex-col lg:justify-center items-center lg:gap-24 gap-10 mt-10">
            {features.map((feature, index) => (
              <>
                <div className="space-y-3" key={index}>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={300}
                    height={300}
                    className="rounded-lg"
                  />
                  <h2 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h2>
                  <p className="text-secondary-100 mb-4 w-[200px]">
                    {feature.description}
                  </p>
                  <a
                    href="#"
                    className="font-medium flex items-center text-primary-50 gap-2 border-b-2 border-primary-50  "
                  >
                    {feature.linkText}{" "}
                    <span className="ml-2 text-3xl">&rarr;</span>
                  </a>
                </div>
              </>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

export default OurServices;
