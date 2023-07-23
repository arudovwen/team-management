import TopBar from "../../components/team-management/dashboard/TopBar";
import StatusCard from "../../components/team-management/dashboard/StatusCard";
import TableComponent from "../../components/team-management/dashboard/TableComponent";
import React, { useState } from "react";

export default function TeamManagement() {
  const [category, setCategory] = useState<string>("requests");
  return (
    <section className=" w-full bg-[#F7F7F7] h-full min-h-[100vh] flex flex-col">
      <TopBar />
      <div className="px-8 flex gap-x-5 w-full flex-1 py-7">
        <div className="flex-1 flex flex-col gap-y-7">
          <StatusCard category={category} setCategory={setCategory} />

          <div className="bg-white px-[30px] py-4 border border-[#E5E9EB] rounded-lg flex-1">
            {" "}
            <TableComponent category={category} />
          </div>
        </div>
        <div className="bg-white p-10 border border-[#E5E9EB] rounded-lg w-[294px]">
          Quick links
        </div>
      </div>
    </section>
  );
}
