import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import {
  FaChevronDown,
  FaEye,
  FaEdit,
  FaTrash,
  FaPlayCircle,
  FaBan,
} from "react-icons/fa";

export default function DropDown({
  options,
  children,
}: {
  options: any;
  children: any;
}) {
  function handleIcons(value: string) {
    switch (value) {
      case "FaEye":
        return <FaEye className="text-[#3FA2F7]" />;
      case "FaEdit":
        return <FaEdit className="text-[#D4A62F]" />;
      case "FaTrash":
        return <FaTrash className="text-[#DC5A5D]" />;
      case "FaBan":
        return <FaBan className="text-[#DC5A5D]" />;
      case "FaPlayCircle":
        return <FaPlayCircle className="text-[#2FB755]" />;

      default:
        break;
    }
  }
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center px-4 py-2 text-sm ">
            {children}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="shadow-[0px_0px_4px_0px_#00000040] absolute right-0 mt-2 min-w-[227px] origin-top-right divide-y divide-gray-100 rounded-b-lg bg-white z-40">
            <div className="">
              {options?.map((item: { id: any; text: string; icon: string }) => (
                <Menu.Item key={item?.text}>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-[#F9E5E5]" : ""
                      } group flex w-full items-center whitespace-nowrap px-4 py-3 text-sm text-[#636363] gap-x-3`}
                    >
                      {handleIcons(item?.icon)} {item?.text}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
