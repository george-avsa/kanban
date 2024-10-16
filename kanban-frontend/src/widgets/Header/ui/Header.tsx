import clsx from "clsx";
import { ETexts } from "../../../assets/fonts/ETexts";
import LogoSmall from "./../assets/logo-small.svg";
import Logo from "./../assets/logo-big.svg";
import Arrow from "./../assets/arrow.svg";
import Plus from "./../assets/plus.svg";
import Dots from "./../assets/dots.svg";
import Button from "../../../shared/ui/Button/Button";
import { EButtonColors } from "../../../shared/ui/Button/types";

const Header = () => {
  const isSidebarVisible = true;

  return (
    <header className="flex h-16 w-full items-center space-x-4 bg-white-100 px-4 md:h-20 md:px-0 md:pr-6 dark:bg-gray-400">
      <div
        className={clsx(
          "flex items-center text-black-100 md:h-full md:border-r md:border-r-violet-100 md:px-6 dark:text-white-100 md:dark:border-r-gray-300",
          isSidebarVisible && "md:min-w-[260px] 2xl:min-w-[300px]"
        )}
      >
        <LogoSmall className="md:hidden" />
        <Logo className="hidden md:block" />
        <h3 className=""></h3>
      </div>
      <div className="flex grow items-center space-x-2">
        <span className={clsx(ETexts.HEADING_L, "dark:text-white-100")}>
          Platform Launch
        </span>
        <div className="mt-1 md:hidden">
          <Arrow />
        </div>
      </div>
      <Button
        isDisabled
        className="flex min-w-12 items-center justify-center"
        bgColor={EButtonColors.VIOLET}
      >
        <Plus />
      </Button>
      <Dots />
    </header>
  );
};

export default Header;
