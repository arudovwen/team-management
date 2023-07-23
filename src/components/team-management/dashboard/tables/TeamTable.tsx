import { BsFunnel } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import moment from "moment";

import { TeamTableHeaders, DropDownOptions } from "../../../../constants";
import PearLessSvg from "../../../../helpers/PearLessSvg";
import { TeamData } from "../../../../__mocks__/tables";
import DropDown from "../../../DropDown";

export default function TeamTable() {
  interface TeamDataProps {
    id: any;
    teamName: string;
    teamCode: string;
    description: string;
    state: string;
    updatedOn: Date;
    isNew?: boolean;
    isNameEdited?: boolean;
  }
  const colorState = {
    active: "bg-[#D4F7DC] text-[#15692A]",
    inactive: "bg-[#E5E5EA] text-[#1E0A3C]",
  };
  function handleDropdown(status: any) {
    if (!status) return [];

    return DropDownOptions[status];
  }

  return (
    <section>
      <div className="">
        <PearLessSvg />
        <table className="w-full">
          <thead>
            <tr>
              {TeamTableHeaders.map(
                (item: { text: string; hasFilter: boolean }) => (
                  <th
                    key={item.text}
                    className="relative uppercase font-bold text-sm text-[#AAAAAA] px-4 py-5 after:content-[''] after:w-1 after:h-[18px] after:absolute after:border-r after:left-0 after:top-1/2 after:translate-y-[-50%] after:border-[#AAAAAA]/75 first-of-type:after:content-none last-of-type:after:content-none border-b border-[#C2C9D1]/30 whitespace-nowrap"
                  >
                    <div className="flex items-center gap-x-20 justify-between">
                      <span className="relative">
                        {item.text}{" "}
                        {item.text === "updated on" && (
                          <span className="bg-[#CF2A2A] w-[6px] h-[6px] rounded-full absolute right-[-6px] top-0 block" />
                        )}
                      </span>

                      {item.hasFilter && (
                        <span className="w-4 h-4 flex items-center justify-center">
                          <BsFunnel />
                        </span>
                      )}
                    </div>
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {TeamData.map((item: TeamDataProps) => (
              <tr
                key={item.id}
                className="bg-[#DB353905] border-b border-[#C2C9D1]/30 last-of-type:border-none"
              >
                <td className="text-base font-medium text-[#636363] px-4 py-5 capitalize max-w-[290px] truncate">
                  <span className="relative">
                    {item.teamName}{" "}
                    {item.isNameEdited && (
                      <span className="bg-[#CF2A2A] w-[6px] h-[6px] rounded-full absolute right-[-6px] top-0 block" />
                    )}
                  </span>
                </td>
                <td className="text-base font-medium text-[#636363] px-4 py-5  uppercase">
                  {item.teamCode}
                </td>
                <td className="text-base font-medium text-[#636363] px-4 py-5  max-w-[284px] truncate">
                  {item.description}
                </td>
                <td className="text-base font-medium text-[#636363] px-4 py-5">
                  <span
                    className={`font-medium px-2 py-[1px] rounded capitalize relative ${
                      item.state === "active"
                        ? colorState.active
                        : colorState.inactive
                    }`}
                  >
                    {item.state}
                    {item.isNew && (
                      <span className="bg-[#CF2A2A] w-[6px] h-[6px] rounded-full absolute right-[-6px] top-0 block" />
                    )}
                  </span>
                </td>
                <td className="text-base font-medium text-[#636363] px-4 py-5">
                  {moment(item.updatedOn).format("lll")}
                </td>

                <td className=" px-4 py-6">
                  <DropDown options={handleDropdown(item.state)}>
                    <FaBars style={{ fill: "url(#pearless-purple)" }} />
                  </DropDown>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
