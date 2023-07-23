import { BsFunnel } from "react-icons/bs";
import { FaBars, FaEye } from "react-icons/fa";
import moment from "moment";

import PearLessSvg from "../../../../helpers/PearLessSvg";
import { RequestTableHeaders, DropDownOptions } from "../../../../constants";
import { RequestData } from "../../../../__mocks__/tables";
import DropDown from "../../../DropDown";

export default function TeamTable() {
  interface RequestDataProps {
    id: any;
    request: string;
    type: string;
    initiator: string;
    status: string;
    updatedOn: Date;
  }
  const colorState = {
    approved: "bg-[#D4F7DC] text-[#15692A]",
    "in-review": "bg-[#F0F5FF] text-[#0050C8]",
    "in-issue": "bg-[#FFD4D2] text-[#9F1F17]",
    draft: "bg-[#E5E5EA] text-[#1E0A3C]",
  };
  function handleColorState(value: string) {
    switch (value) {
      case "approved":
        return colorState["approved"];

      case "in-review":
        return colorState["in-review"];

      case "in-issue":
        return colorState["in-issue"];

      case "draft":
        return colorState["draft"];

      default:
        return colorState["draft"];
    }
  }
 const creationMap = ["creation", "modification", "bulk creation"]
 const activationMap = ["activation", "reactivation"]
  function handleDropdown(status: string, type: string) {
    if (!status || !type) return [];
    const firstLevel = DropDownOptions[creationMap.includes(type.toLowerCase())?"creation":"activation"];
    const selectedType: any = firstLevel?.find(
      (i: any, index: any) =>
        Object.keys(i).toString().toLowerCase() === status.toLowerCase()
    );

    if (!selectedType) return [];
    console.log(selectedType);
    return selectedType[status];
  }

  return (
    <section>
      <div className="">
        <PearLessSvg />
        <table className="w-full">
          <thead>
            <tr>
              {RequestTableHeaders.map(
                (item: { text: string; hasFilter: boolean }) => (
                  <th
                    key={item.text}
                    className="border-b border-[#C2C9D1]/30 last-of-type:border-none relative uppercase font-bold text-sm text-[#AAAAAA] px-4 py-5 after:content-[''] after:w-1 after:h-[18px] after:absolute after:border-r after:left-0 after:top-1/2 after:translate-y-[-50%] after:border-[#AAAAAA]/75 first-of-type:after:content-none last-of-type:after:content-none  whitespace-nowrap"
                  >
                    <div className="flex items-center gap-x-20 justify-between">
                      <span className="relative">{item.text} </span>

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
            {RequestData.map((item: RequestDataProps) => (
              <tr
                key={item.id}
                className="bg-[#DB353905] border-b border-[#C2C9D1]/30 last-of-type:border-none"
              >
                <td className="text-base font-medium text-[#636363] px-4 py-5  capitalize max-w-[290px] truncate">
                  <span className="relative">{item.request} </span>
                </td>
                <td className="text-base font-medium text-[#636363] px-4 py-5  capitalize">
                  {item.type}
                </td>
                <td className="text-base font-medium text-[#636363] px-4 py-5  max-w-[284px] truncate capitalize">
                  {item.initiator}
                </td>
                <td className="text-base font-medium text-[#636363] px-4 py-5 ">
                  <span
                    className={`font-medium px-2 py-[1px] rounded capitalize relative flex gap-x-[6px] items-center max-w-max ${handleColorState(
                      item.status
                    )}`}
                  >
                    {item.status} <FaEye />
                  </span>
                </td>
                <td className="text-base font-medium text-[#636363] px-4 py-5 ">
                  {moment(item.updatedOn).format("lll")}
                </td>

                <td className=" px-4 py-6">
                  <DropDown options={handleDropdown(item.status, item.type)}>
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
