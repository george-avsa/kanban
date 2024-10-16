import { FC } from "react";
import EyeIcon from "./../assets/eye.svg";
import clsx from "clsx";
import { ETexts } from "../../../assets/fonts/ETexts";

const SidebarToggler: FC = () => {
  return (
    <button className="mt-8 hidden items-center px-4 pb-8 text-gray-200 md:flex">
      <EyeIcon className="mt-px" />
      <span className={clsx("ml-2", ETexts.HEADING_M)}>Hide Sidebar</span>
    </button>
  );
};

export default SidebarToggler;
