import { useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";

import {
  StatusCategories,
  StatusTypes,
  StatusRequests,
  TeamOptions,
  RequestOptions,
} from "../../../constants";
import Select from "../../forms/Select";

export default function StatusCard() {
  const [active, setActive] = useState<number>(1);
  const [activeType, setActiveType] = useState<string>("all");

  //   Get select value
  function handleSelected(value: any) {
    console.log(value);
  }
  return (
    <div className="flex border border-[#E5E9EB] rounded-lg">
      <svg width="0" height="0">
        <linearGradient
          id="pearless-purple"
          x1="100%"
          y1="100%"
          x2="0%"
          y2="0%"
        >
          <stop stopColor="#783B96" offset="0%" />
          <stop stopColor="#C5593C" offset="100%" />
        </linearGradient>
      </svg>

      <div className="bg-[#EFEFEF] w-[208px] rounded-l-lg border-r border-[#D0D5DD] overflow-hidden">
        {StatusCategories.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={` ${
              active === item.id ? "bg-white font-semibold text-[20px]" : ""
            } px-4 py-[19px] text-[18px] text-[#636363] text-left flex gap-x-[5px] items-center leading-[24px] w-full capitalize border-[#D0D5DD] border-b last-of-type:border-b-0 hover:font-semibold hover:bg-gray-50`}
          >
            <AiFillCaretRight
              className={`${active === item.id ? "visible" : "invisible"}`}
              style={{ fill: "url(#pearless-purple)" }}
            />{" "}
            {item.type}
          </button>
        ))}
      </div>
      <div className="flex-1 bg-white py-[10px] px-[22px] rounded-r-lg flex justify-between">
        <div className="flex gap-x-5 py-[14px] pl-[20px]">
          {(active === 1 ? StatusTypes : StatusRequests).map((item) => (
            <div
              key={`${item.type}-${item.id}`}
              onClick={() => setActiveType(item.type)}
              className={`border  rounded-lg  py-1 px-[15px] flex flex-col cursor-pointer hover:bg-gray-50 hover:border-[#D0D5DD] relative ${
                activeType === item.type
                  ? "bg-[#EFEFEF] border-[#D0D5DD]"
                  : "border-transparent"
              } after:content-[""] after:w-1 after:h-[80%] after:absolute after:border-r after:right-[-12px] after:top-1/2 after:translate-y-[-50%] after:border-[#E5E9EB] last-of-type:after:content-none`}
            >
              <span
                className={`text-sm capitalize ${
                  activeType === item.type ? "font-semibold" : "font-normal"
                }`}
                style={{ color: item.color }}
              >
                {" "}
                {item.type}
              </span>
              <span className="text-2xl xl:text-4xl text-[#252C32] font-semibold">
                186
              </span>
            </div>
          ))}
        </div>
        <div>
          <Select
            options={active === 1 ? TeamOptions : RequestOptions}
            handleSelected={(value: any) => handleSelected(value)}
          />
        </div>
      </div>
    </div>
  );
}
