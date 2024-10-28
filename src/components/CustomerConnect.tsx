"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { LinkOrButton } from "./LinkOrButton";

import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  DoughnutController,
} from "chart.js";
import Container from "./Container";

Chart.register(ArcElement, Tooltip, Legend, DoughnutController);

const CustomerConnect = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      if (ctx) {
        const myChart = new Chart(ctx, {
          type: "doughnut",
          data: {
            datasets: [
              {
                data: [1, 1, 1],
                backgroundColor: ["#65E4A3", "#0A2640", "#0DBBFC"],
                borderWidth: 0,
              },
            ],
          },
          options: {
            responsive: true,
            cutout: "50%",
            aspectRatio: 1,
            plugins: {
              legend: {
                position: "right",
              },
              tooltip: {
                callbacks: {
                  label: function (tooltipItem) {
                    return `${tooltipItem.label}: ${tooltipItem.raw}`;
                  },
                },
              },
            },
          },
        });

        return () => {
          myChart.destroy();
        };
      }
    }
  }, []);
  return (
    <Container maxWidth={"xl"}>
      <div className="lg:p-10 p-4 mt-20 flex lg:flex-row flex-col lg:justify-between gap-10">
        <div className="lg:relative">
          <div className="hidden lg:block">
            <Image
              src="/assets/images/maleconnect.png"
              alt={"connect"}
              width={500}
              height={500}
            />
          </div>
          <div className="lg:absolute lg:bottom-[-200px] lg:left-[180px] transform -translate-y-1/2 bg-white shadow-lg lg:w-[220px] p-10 lg:mt-0 mt-10">
            <div className="rounded-lg flex items-end justify-between">
              <div className="w-5 px-1 h-6 mx-1 mb-[-20px] bg-primary-200"></div>
              <div className="w-5 px-1 mx-1 h-4 mb-[-5px] bg-primary-200"></div>
              <div className="w-5 px-1 mx-1 h-16 bg-primary-200"></div>
              <div className="w-5 px-1 mx-1 h-14 bg-primary-200"></div>
              <div className="w-5 px-1 mx-1 h-24 bg-primary-50"></div>
              <div className="w-5 px-1 mx-1 h-16 bg-primary-200"></div>
              <div className="w-5 px-1 mx-1 h-20 bg-primary-200"></div>
              <div className="w-5 px-1 mx-1 h-10 bg-primary-200"></div>
            </div>
            <h2 className="mt-10 font-bold text-primary-50">30%</h2>
            <p className="font-extralight text-primary-50 text-[13px] mt-2">
              More income in June
            </p>
          </div>
        </div>
        <div className="lg:w-[500px] lg:mt-24">
          <h3 className="text-4xl">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h3>
          <div className="mt-8">
            <div className="flex flex-row gap-7 items-center">
              <Image
                src="/assets/images/check.png"
                alt={"connect"}
                width={20}
                height={20}
              />

              <p>We connect our customers with the best.</p>
            </div>

            <div className="flex flex-row gap-7 mt-5 items-center">
              <Image
                src="/assets/images/check.png"
                alt={"connect"}
                width={20}
                height={20}
              />

              <p>Advisor success customer launch party.</p>
            </div>

            <div className="flex flex-row gap-7  mt-5 items-center">
              <Image
                src="/assets/images/check.png"
                alt={"connect"}
                width={20}
                height={20}
              />

              <p>Business-to-consumer long tail.</p>
            </div>
          </div>

          <LinkOrButton
            isFull={false}
            className="text-white py-3 px-10 rounded-full mt-7"
          >
            Start Now
          </LinkOrButton>
        </div>
      </div>

      <div className="lg:p-10 p-4 p-14 mt-20 flex lg:flex-row flex-col lg:justify-between gap-10">
        <div className="lg:w-[500px] lg:mt-24 hidden lg:block">
          <h3 className="text-4xl">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h3>
          <div className="mt-8">
            <div className="flex flex-row gap-7 items-center bg-primary-50 p-3 text-white">
              <Image
                src="/assets/images/star.png"
                alt={"connect"}
                width={20}
                height={20}
              />

              <p>We connect our customers with the best.</p>
            </div>

            <div className="flex flex-row gap-7 mt-5 items-center p-3">
              <Image
                src="/assets/images/eye.png"
                alt={"connect"}
                width={20}
                height={20}
              />

              <p>Advisor success customer launch party.</p>
            </div>

            <div className="flex flex-row gap-7 p-3 mt-5 items-center">
              <Image
                src="/assets/images/sun.png"
                alt={"connect"}
                width={20}
                height={20}
              />

              <p>Business-to-consumer long tail.</p>
            </div>
          </div>
        </div>

        <div className="lg:relative">
          <div className="hidden lg:block">
            <Image
              src="/assets/images/femaleconnect.png"
              alt={"connect"}
              width={500}
              height={500}
            />
          </div>
          <div className="lg:absolute lg:bottom-[-230px] lg:left-[70px] transform -translate-y-1/2 bg-white shadow-lg lg:w-[300px] p-10 lg:mt-0 mt-20">
            <div className="">
              <canvas ref={chartRef} width={190} height={190} />
            </div>
            <div className="space-y-2 lg:mt-0 mt-5">
              <div className="flex flex-row items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary-50"></div>
                <p>30% - </p>
                <p>Agile Development</p>
              </div>

              <div className="flex flex-row items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary-100"></div>
                <p>30% - </p>
                <p> Investor Bandwidth</p>
              </div>

              <div className="flex flex-row items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary-50"></div>
                <p>30% - </p>
                <p>A/B Testing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CustomerConnect;
