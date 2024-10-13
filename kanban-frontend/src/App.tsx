import clsx from "clsx";
import { ETexts } from "./assets/fonts/ETexts";
import { useLayoutEffect, useState } from "react";
import Select from "./shared/ui/Select/Select";

function App() {
  useLayoutEffect(() => {
    const html = document.querySelector("html");
    html?.classList.add("dark");
  }, []);

  const [active, setActive] = useState("");

  return (
    <div className="h-screen w-screen bg-gray-100 p-3 dark:bg-black-100">
      <h1 className={clsx(ETexts.TEXT)}>Hello man!!</h1>
      <Select
        options={[
          { name: "dklk", type: "kdlsdkl" },
          { name: "dkklklk", type: "kdlsdklkl" },
          { name: "dkdskkjskk", type: "jk" },
        ]}
        active={active}
        setActive={setActive}
        defaultValue="Choose value"
      />
    </div>
  );
}

export default App;
