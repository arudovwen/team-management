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
import PearLessSvg from "../../../helpers/PearLessSvg";
export default function StatusCard({
  category,
  setCategory,
}: {
  category: string;
  setCategory: (e: string) => void;
}) {
  const [activeType, setActiveType] = useState<string>("all");
  const [selected, setSelected] = useState<any>("");
  //   Get select value
  function handleSelected(value: any) {
    setSelected(value);
  }
  return (
    <div className="flex border border-[#E5E9EB] rounded-lg">
      <PearLessSvg />
      <div className="bg-[#EFEFEF] w-[208px] rounded-l-lg border-r border-[#D0D5DD] overflow-hidden">
        {StatusCategories.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => setCategory(item.type)}
            className={` ${
              category === item.type ? "bg-white font-semibold text-[20px]" : ""
            } px-4 py-[19px] text-[18px] text-[#636363] text-left flex gap-x-[5px] items-center leading-[24px] w-full capitalize border-[#D0D5DD] border-b last-of-type:border-b-0 hover:font-semibold hover:bg-gray-50`}
          >
            <AiFillCaretRight
              className={`${category === item.type ? "visible" : "invisible"}`}
              style={{ fill: "url(#pearless-purple)" }}
            />{" "}
            {item.type}
          </button>
        ))}
      </div>
      <div className="flex-1 bg-white py-[10px] px-[22px] rounded-r-lg flex justify-between">
        <div className="flex gap-x-5 py-[14px] pl-[20px]">
          {(category === "teams" ? StatusTypes : StatusRequests).map((item) => (
            <button
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
            </button>
          ))}
        </div>
        <div>
          <Select
            options={category === "teams" ? TeamOptions : RequestOptions}
            handleSelected={(value: any) => handleSelected(value)}
          />
        </div>
      </div>
    </div>
  );
}
