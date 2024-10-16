import { FC, useCallback, useState } from "react";
import Moon from "./../assets/moon.svg";
import Sun from "./../assets/sun.svg";
import clsx from "clsx";

const ThemeToggler: FC = () => {
  const [isLight, setIsLight] = useState(true);

  const handleTheme = useCallback(() => {
    setIsLight((prev) => !prev);
    const html = document.querySelector("html");
    html?.classList.toggle("dark");
  }, []);

  return (
    <div className="flex w-full justify-center space-x-6 rounded-lg bg-gray-100 py-4 dark:bg-black-100">
      <Sun />
      <button
        className="relative h-5 w-10 rounded-full bg-violet-300"
        onClick={handleTheme}
      >
        <div
          className={clsx(
            "absolute top-[3px] size-[14px] rounded-full bg-white-100 transition-all",
            isLight ? "left-[3px]" : "left-[calc(100%_-_17px)]"
          )}
        />
      </button>
      <Moon />
    </div>
  );
};

export default ThemeToggler;
