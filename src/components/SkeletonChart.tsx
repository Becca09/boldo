"use client";
import React, { useEffect, useRef } from "react";

import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  DoughnutController,
} from "chart.js";

Chart.register(ArcElement, Tooltip, Legend, DoughnutController);

const SkeletalChart = () => {
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
            cutout: "80%",
            aspectRatio: 1.3,
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

        // Clean up the chart when the component is unmounted
        return () => {
          myChart.destroy();
        };
      }
    }
  }, []);

  return (
    <>
      <div className="p-6 rounded-lg space-y-4 text-white">
        <div className="rounded-lg p-4 space-y-3 bg-white bg-opacity-15">
          <div className="flex space-x-2">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>

          <div>
            <div className="flex flex-row gap-5 mt-4">
              <div className="lg:h-3 lg:w-[70px] h-2 w-14 bg-secondary-300 rounded-full mt-2"></div>
              <div className="lg:h-3 lg:w-[300px] h-2 w-[115px] bg-secondary-50 rounded-full mt-2"></div>
              <h1 className="text-center">80%</h1>
            </div>

            <div className="flex flex-row gap-5 mt-4">
              <div className="lg:h-3 lg:w-[70px] h-2 w-14 bg-secondary-300 rounded-full mt-2"></div>
              <div className="lg:h-3 lg:w-[120px] h-2 w-[70px] bg-primary-200 rounded-full mt-2"></div>
              <h1 className="text-center">30%</h1>
            </div>

            <div className="flex flex-row gap-5 mt-4">
              <div className="lg:h-3 lg:w-[70px] h-2 w-14 bg-secondary-300 rounded-full mt-2"></div>
              <div className="lg:h-3 lg:w-[355px] h-2 w-[130px] bg-white rounded-full mt-2"></div>
              <h1 className="text-center">100%</h1>
            </div>

            <div className="flex flex-row gap-5 mt-4">
              <div className="lg:h-3 lg:w-[70px] h-2 w-14 bg-secondary-300 rounded-full mt-2"></div>
              <div className="lg:h-3 lg:w-[260px] h-2 w-[100px] bg-primary-100 rounded-full mt-2"></div>
              <h1 className="text-center">70%</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col lg:justify-between">
        <div className="p-6 rounded-lg space-y-4 text-white">
          <div className="rounded-lg p-4 space-y-3 bg-white bg-opacity-15">
            <div className="flex space-x-2 r">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <div className="p-4  rounded-lg lg:w-40 h-28 flex items-end justify-between">
              <div className="w-2 h-6 mb-[-20px] bg-primary-200 rounded-full"></div>
              <div className="w-2 h-4 mb-[-5px] bg-primary-200 rounded-full"></div>
              <div className="w-2 h-16 bg-primary-200 rounded-full"></div>
              <div className="w-2 h-14 bg-primary-200 rounded-full"></div>
              <div className="w-2 h-24 bg-secondary-50 rounded-full"></div>
              <div className="w-2 h-16 bg-primary-200 rounded-full"></div>
              <div className="w-2 h-20 bg-primary-200 rounded-full"></div>
              <div className="w-2 h-10 bg-primary-200 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg space-y-4 text-white">
          <div className="rounded-lg p-4 space-y-3 bg-white bg-opacity-15">
            <div className="flex space-x-2">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <div className="flex flex-row">
              <div className="">
                <canvas ref={chartRef} width={150} height={150} />
              </div>
              <div className=" mt-8 flex flex-col">
                <div className="lg:h-2 lg:w-[90px] h-2 w-14 bg-secondary-300 rounded-full mt-2"></div>
                <div className="lg:h-2 lg:w-[70px] h-2 w-14 bg-secondary-300 rounded-full mt-2"></div>
                <div className="lg:h-2 lg:w-[100px] h-2 w-14 bg-secondary-300 rounded-full mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletalChart;
