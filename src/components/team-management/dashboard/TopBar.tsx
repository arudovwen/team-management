import Button from "../../Button";
import { HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="bg-white px-8 py-[52px] w-full border border-[#E5E9EB] min-h-[198px] flex gap-x-9 items-center">
      <h1 className="text-[#636363] text-5xl font-bold">Team Management</h1>
      <Link to="/team-management/create">
        <Button className="bg-pearless-purple">
          <span className="p-[5px]">
            <HiPlus fontSize={14} />
          </span>{" "}
          Create new team
        </Button>
      </Link>
    </div>
  );
}
