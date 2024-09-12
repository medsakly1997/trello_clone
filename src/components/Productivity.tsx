"use client";
import { productiveList } from "@/lib/data";
import React, { useState } from "react";

const Productivity = () => {
  const [itemIndex, setItemIndex] = useState<number>(0);
  return (
    <div className="px-[10%]">
      <p>TRELLO 101</p>
      <h1 className="font-semibold text-4xl">A productivity powerhouse</h1>
      <p className="w-full lg:w-1/2 text-xl my-5">
        Simple, flexible, and powerful. All it takes are boards, lists, and
        cards to get a clear view of who’s doing what and what needs to get
        done. Learn more in our guide for getting started.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_2fr] gap-2">
        <div className="flex flex-col justify-between py-4 leading-normal">
          {productiveList?.map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer p-3 rounded-md`}
              onClick={() => setItemIndex(index)}
            >
              <h5 className="mb-2 text-lg font-bold tracking-tight">
                {item.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700">{item.describe}</p>
            </div>
          ))}
        </div>

        <img
          src={`/productive_${itemIndex + 1}.jpg`}
          className="object-cover w-full rounded-t-lg h-auto"
          alt="productive"
        />
      </div>
    </div>
  );
};

export default Productivity;
