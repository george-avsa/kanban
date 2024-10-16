import clsx from "clsx";
import { ETexts } from "../../assets/fonts/ETexts";
import NavigationItem from "../../shared/NavigationItem/ui/NavigationItem";
import ThemeToggler from "../../shared/ThemeToggler/ui/ThemeToggler";
import SidebarToggler from "../../shared/SidebarToggler/ui/SidebarToggler";

const Sidebar = () => {
  return (
    <>
      <div className="absolute left-0 top-0 z-20 size-full bg-black-200/50 md:hidden"></div>
      <div className="absolute left-1/2 top-4 z-30 ml-[-132px] w-[264px] flex-col rounded-lg border-r-violet-100 bg-white-100 md:relative md:left-0 md:top-0 md:ml-0 md:flex md:h-full md:min-w-[260px] md:rounded-none md:border-r 2xl:min-w-[300px] dark:bg-gray-400 md:dark:border-r-gray-300">
        <div
          className={clsx(
            "px-6 pt-4 text-gray-300/50 dark:text-gray-200",
            ETexts.HEADING_S
          )}
        >
          ALL BOARDS (3)
        </div>
        <div className="mt-5 w-full grow pr-8">
          <NavigationItem text="fkdlfkdl" isActive />
          <NavigationItem text="fkdlfkdl" />
          <NavigationItem text="fkdlfkdl" />
          <NavigationItem text="fkdlfkdl" isDefault />
        </div>
        <div className="mt-4 w-full px-4 pb-4 md:pb-0">
          <ThemeToggler />
        </div>
        <SidebarToggler />
      </div>
    </>
  );
};

export default Sidebar;
