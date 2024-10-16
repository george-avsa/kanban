import clsx from "clsx";
import { FC } from "react";
import { ETexts } from "../../../assets/fonts/ETexts";
import { EButtonColors, EButtonSizes } from "./types";

const ButtonColorClasses: Record<EButtonColors, string> = {
  [EButtonColors.VIOLET]: "bg-violet-300 hover:bg-violet-200 text-white-100",
  [EButtonColors.LIGHT]:
    "bg-violet-100 hover:bg-violet-200 dark:bg-white-200 text-violet-300",
  [EButtonColors.RED]: "bg-red-200 hover:bg-red-100 text-white-100",
};

const ButtonSizeClasses: Record<EButtonSizes, string> = {
  [EButtonSizes.DEFAULT]: `h-10 ${ETexts.TEXT_BOLD}`,
  [EButtonSizes.LARGE]: `h-12 ${ETexts.HEADING_M}`,
};

interface IButtonProps {
  className?: string;
  children?: JSX.Element | string;
  bgColor?: EButtonColors;
  size?: EButtonSizes;
  isDisabled?: boolean;
}

const Button: FC<IButtonProps> = ({
  className,
  children,
  bgColor = EButtonColors.VIOLET,
  size = EButtonSizes.DEFAULT,
  isDisabled,
}) => {
  return (
    <button
      className={clsx(
        className,
        ButtonColorClasses[bgColor],
        ButtonSizeClasses[size],
        "rounded-full transition-all disabled:opacity-50"
      )}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
