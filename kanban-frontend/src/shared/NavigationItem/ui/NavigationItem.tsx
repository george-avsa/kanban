import { FC } from "react";
import NavigationIcon from "./../assets/navigation.svg";
import { ETexts } from "../../../assets/fonts/ETexts";
import clsx from "clsx";

interface INavigationItemProps {
  text: string;
  isActive?: boolean;
  isDefault?: boolean;
}

const NavigationItem: FC<INavigationItemProps> = ({
  text,
  isActive,
  isDefault,
}) => {
  return (
    <button
      className={clsx(
        "relative flex h-12 w-full items-center gap-x-3 pl-6",
        isActive && "text-white-100",
        isDefault && "text-violet-300",
        !isActive && !isDefault && "text-gray-300/50 dark:text-gray-200"
      )}
    >
      <NavigationIcon />
      <span className={ETexts.HEADING_M}>
        {isDefault ? "+ Create New Board" : text}
      </span>
      <div
        className={clsx(
          "absolute left-0 top-0 -z-10 size-full rounded-e-full",
          isActive && "bg-violet-300"
        )}
      ></div>
    </button>
  );
};

export default NavigationItem;
