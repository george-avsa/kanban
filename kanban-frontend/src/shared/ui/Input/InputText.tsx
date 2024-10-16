import clsx from "clsx";
import { ETexts } from "../../../assets/fonts/ETexts";
import { Dispatch, FC, useCallback, useState } from "react";

interface IInputTextProps {
  placeholder: string;
  value: string;
  setValue: Dispatch<string>;
  regexp?: RegExp;
  errorString?: string;
  maxSymbols?: number;
  isRequired?: boolean;
}

const InputText: FC<IInputTextProps> = ({
  placeholder,
  value,
  setValue,
  errorString,
  regexp,
  maxSymbols,
  isRequired = false,
}) => {
  const [error, setError] = useState("");

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const currentValue = e.currentTarget.value;
      let matchString = "";
      if (errorString && regexp) {
        matchString = currentValue.match(regexp)?.[0] ?? "";
      }
      if (maxSymbols && currentValue.length > maxSymbols) {
        setError(`Not more than ${maxSymbols} symbols`);
      } else if (isRequired && !currentValue.length) {
        setError(`Cannot be empty!`);
      } else if (
        regexp &&
        errorString &&
        matchString.length !== currentValue?.length
      ) {
        setError(errorString);
      } else {
        setError("");
      }
      setValue(currentValue);
    },
    [setValue, regexp, isRequired, maxSymbols, errorString]
  );

  return (
    <div className={clsx("relative max-w-[350px]", ETexts.TEXT)}>
      <input
        className={clsx(
          "h-10 w-full rounded-md border px-4 text-black-100 transition-all placeholder:opacity-25 focus:outline focus:outline-1 dark:border-white-100/25 dark:bg-gray-400 dark:text-white-100",
          error
            ? "border-red-200 pr-36 focus:outline-red-200"
            : "border-gray-400/25 focus:outline-violet-300"
        )}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        data-error={!!error}
      />
      {error && (
        <div className="absolute right-4 top-0 flex h-full items-center text-red-200">
          {error}
        </div>
      )}
    </div>
  );
};

export default InputText;
