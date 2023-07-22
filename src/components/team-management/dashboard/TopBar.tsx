import { HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="bg-white px-8 py-[52px] w-full border border-[#E5E9EB] mb-7 min-h-[198px] flex gap-x-9 items-center">
      <h1 className="text-[#636363] text-5xl font-bold">Team Management</h1>
      <Link to="/team-management/create">
        <button className="capitalize text-sm font-semibold text-[#F6F8F9] px-3 py-1 rounded-[6px] bg-pearless-purple flex gap-x-2 items-center active:scale-95 transition ease-in-out duration-300 hover:opacity-90">
          <span className="p-[5px]">
            <HiPlus fontSize={14} />
          </span>{" "}
          Create new team
        </button>
      </Link>
    </div>
  );
}
