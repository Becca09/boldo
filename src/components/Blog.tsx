import React from "react";
import Image from "next/image";
import { LinkOrButton } from "./LinkOrButton";
import Container from "./Container";

const Blog = () => {
  const Blogs = [
    {
      image: "/assets/images/bloger1.png",
      category: "November 22, 2021",
      description: "Pitch termsheet backing validation focus release.",
      bloger: "Chandler Bing",
      bloggerImage: "/assets/images/chandler.png",
    },
    {
      image: "/assets/images/blogger2.png",
      category: "November 22, 2021",
      description:
        "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
      bloger: "Rachel Green",
      bloggerImage: "/assets/images/rachel.png",
    },
    {
      image: "/assets/images/blogger3.png",
      category: "November 22, 2021",
      description:
        "Beta prototype sales iPad gen-z marketing network effects value proposition",
      bloger: "Monica Green",
      bloggerImage: "/assets/images/monica.png",
    },
  ];
  return (
    <Container maxWidth={"xl"}>
      <div className="p-5 mt-5">
        <div className="text-center">
          <h1 className="text-secondary-100">Our Blog</h1>
          <h3 className="lg:text-[50px] mt-5">
            Value proposition accelerator product <br /> management venture{" "}
          </h3>
        </div>
        <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-24 gap-10 mt-10">
          {Blogs.map((blog, index) => (
            <>
              <div
                className="space-y-3 h-full flex flex-col justify-between p-5"
                key={index}
              >
                <Image
                  src={blog.image}
                  alt={blog.category}
                  width={300}
                  height={300}
                  className="rounded-lg"
                />
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold mb-2">
                    Category{" "}
                    <span className="text-[10px] text-secondary-100">
                      {blog.category}
                    </span>
                  </h2>
                  <p className="text-secondary-100 mb-4 w-[200px]">
                    {blog.description}
                  </p>
                </div>

                <div className="flex items-center">
                  <div>
                    <Image
                      src={blog.bloggerImage}
                      alt={blog.bloger}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>

                  <div className="ml-3">
                    <h3 className="font-semibold">{blog.bloger}</h3>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button className="border-2 border-primary-50  text-primary-50 rounded-full px-6 py-2 hover:bg-primary-50 hover:text-white transition duration-200">
            Load More
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Blog;
