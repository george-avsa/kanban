import clsx from "clsx";
import { Dispatch, FC, useRef, useState } from "react";
import { ETexts } from "../../../assets/fonts/ETexts";
import useClickOutside from "../../../hooks/useClickOutside";
import Imagevg from "./assets/arrow.svg";

interface IOptionProps {
  name: string;
  type: string;
}

interface ISelectProps {
  options: IOptionProps[];
  active: string;
  setActive: Dispatch<string>;
  defaultValue?: string;
}

const Select: FC<ISelectProps> = ({
  options,
  active,
  setActive,
  defaultValue,
}) => {
  const [isOpened, setIsOpened] = useState(false);

  const ref = useRef<HTMLButtonElement>(null);

  useClickOutside(ref.current, () => {
    setIsOpened(false);
  });

  return (
    <button
      className={clsx(
        ETexts.TEXT,
        "relative h-10 w-[350px] rounded-md border border-gray-200 px-4 text-left focus:outline focus:outline-1 focus:outline-violet-300 dark:text-white-100"
      )}
      ref={ref}
      onClick={() => {
        setIsOpened(true);
      }}
    >
      {active || defaultValue}
      <div className="absolute right-4 top-0 flex h-full items-center text-red-200">
        <Imagevg />
        {/* <img src={imagevg} alt="" className="text-red-200" /> */}
      </div>
      {isOpened && (
        <div className="absolute left-0 top-[calc(100%_+_8px)] flex w-full cursor-pointer flex-col space-y-2 rounded-lg p-4">
          {options.map((option) => (
            <button
              value={option.type}
              className={clsx(
                "text-left",
                active === option.type
                  ? "text-gray-300/80 dark:text-white-100/80"
                  : "text-gray-300/50 dark:text-white-100/50"
              )}
              onClick={(e) => setActive(e.currentTarget.value)}
              key={option.type}
            >
              {option.name}
            </button>
          ))}
        </div>
      )}
    </button>
  );
};

export default Select;
