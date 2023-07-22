import TopBar from "../../components/team-management/dashboard/TopBar";
import React from "react";

export default function TeamManagement() {
  return (
    <section className="text-4xl w-full bg-[#F7F7F7] h-full min-h-[60vh] flex flex-col">
      <TopBar />
      <div className="px-8 flex gap-x-5 w-full flex-1">
        <div className="flex-1 flex flex-col">
          <div className="bg-white p-10  border border-[#E5E9EB] mb-7 rounded-lg min-h-[126px]">
            {" "}
            min top box
          </div>
          <div className="bg-white p-10 border border-[#E5E9EB] rounded-lg flex-1">
            {" "}
            table box
          </div>
        </div>
        <div className="bg-white p-10 border border-[#E5E9EB] rounded-lg w-[294px]">
          Quick links
        </div>
      </div>
    </section>
  );
}
