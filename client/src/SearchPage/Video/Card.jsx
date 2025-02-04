import React from "react";

export default function Card({ data }) {
  console.log("------------------------video----------------")
  console.log(data)
    const obj=data.bestThumbnail;
    const cloneFood = Object.assign({}, obj);
    
    console.log(cloneFood.url);
  return (
    <a href={data.url} target="_blank">
    <div className=" m-2 mt-7 text-white">
      <div className="text-[9px] text-[#8e8c8c] ">{data.url}</div>
      <div className="font-semibold text-[#5b2bf7] text-[12px] sm:text-[16px] md:text-[18px]">
        {data.title}
      </div>
      <div className="flex flex-wrap ">
        <div className="text-black">
          <div
            className="bg-cover  bg-fit w-[260px] h-[200px] bg-black mt-1  "
            style={{ backgroundImage: `url(${cloneFood.url})` }}
          ></div>
        </div>
          <div className="text-black w-[300px] m-2 sm:m-5">
          <div className="text-[10px] text-[#8e8c8c] ">{data.url}</div>
          <div className="font-semibold text-[#616161] text-[12px] sm:text-[16px] md:text-[15px]">
        {data.title}
      </div>
          <div className="font-semibold text-[#616161] text-[12px] sm:text-[11px] md:text-[11px]">
        {data.title}
      </div>
      
          </div>
      </div>
    </div>
    </a>
  );
}
