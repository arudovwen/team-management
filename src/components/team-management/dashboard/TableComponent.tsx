import React from "react";
import { FaSearch } from "react-icons/fa";
import { HiRefresh, HiDownload } from "react-icons/hi";
import { RequestTable, TeamTable } from "./tables";

export default function TableComponent({ category }: { category: string }) {
  return (
    <section>
      {/* Top bar  */}
      <div className="flex justify-end gap-x-[25px] items-center mb-[27px]">
        <div
          className="border-b border-[#AAAAAA] shadow-[0px_0px_4px_0px_#00000040] flex items-center relative
         after:content-[''] after:w-1 after:h-[80%] after:absolute after:border-r after:right-[-15px] after:top-1/2 after:translate-y-[-50%] after:border-[#E5E9EB]"
        >
          <span className="w-8 h-8 flex items-center justify-center">
            <FaSearch className="text-[#48535B]" />
          </span>
          <input
            type="search"
            placeholder="Search by team name or code"
            className="placeholder:text-base placeholder:text-[#AAAAAA] h-8 py-2 pl-1 pr-4 w-[294px] outline-none text-[#48535B]"
          />
        </div>
        <div className="relative  after:content-[''] after:w-1 after:h-[80%] after:absolute after:border-r after:right-[-15px] after:top-1/2 after:translate-y-[-50%] after:border-[#E5E9EB]">
          {/* Refresh button  */}
          <button className="flex gap-x-2 items-center bg-transparent border-none text-[#636363] text-base">
            <HiRefresh className="text-lg" /> Refresh table
          </button>
        </div>{" "}
        <div>
          {/* download button  */}{" "}
          <button className="flex gap-x-2 items-center bg-transparent border-none text-[#636363] text-base">
            <HiDownload className="text-lg" /> Download
          </button>
        </div>
      </div>

      {/* main table  */}

      {category === "teams" ? <TeamTable /> : <RequestTable />}
    </section>
  );
}
