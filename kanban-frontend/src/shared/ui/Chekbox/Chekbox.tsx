import clsx from "clsx";
import { FC, useState } from "react";
import { ETexts } from "../../../assets/fonts/ETexts";

const Checkbox: FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <button
      className={clsx(
        "relative flex h-10 w-[350px] cursor-pointer items-center rounded-md bg-violet-100 px-3 transition-all hover:bg-violet-200 dark:bg-black-100/25"
      )}
      onClick={() => {
        setIsChecked((prev) => !prev);
      }}
    >
      <input
        type="checkbox"
        className="peer absolute size-0 cursor-pointer opacity-0"
        checked={isChecked}
      />
      <div
        className={clsx(
          "size-4 rounded-sm border ",
          isChecked
            ? "border-violet-300 bg-violet-300"
            : "border-gray-100 bg-white-100 dark:border-gray-400 dark:bg-gray-400/25"
        )}
      ></div>
      <p
        className={clsx(
          ETexts.TEXT_BOLD,
          "ml-3 dark:text-white-100",
          isChecked && "line-through opacity-50"
        )}
      >
        dfjd
      </p>
    </button>
  );
};

export default Checkbox;

// <!DOCTYPE html>
// <html>
// <style>
// /* The container */
// .container {
//   display: block;
//   position: relative;
//   padding-left: 35px;
//   margin-bottom: 12px;
//   cursor: pointer;
//   font-size: 22px;
//   -webkit-user-select: none;
//   -moz-user-select: none;
//   -ms-user-select: none;
//   user-select: none;
// }

// /* Hide the browser's default checkbox */
// .container input {
//   position: absolute;
//   opacity: 0;
//   cursor: pointer;
//   height: 0;
//   width: 0;
// }

// /* On mouse-over, add a grey background color */
// .container:hover input ~ .checkmark {
//   background-color: #ccc;
// }

// /* When the checkbox is checked, add a blue background */
// .container input:checked ~ .checkmark {
//   background-color: #2196F3;
// }

// /* Show the checkmark when checked */
// .container input:checked ~ .checkmark:after {
//   display: block;
// }
