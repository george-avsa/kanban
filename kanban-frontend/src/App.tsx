import clsx from "clsx";
import { ETexts } from "./assets/fonts/ETexts";
import Button, { EButtonColors } from "./shared/ui/Button/Button";
import { useLayoutEffect } from "react";

function App() {
  useLayoutEffect(() => {
    const html = document.querySelector("html");
    html?.classList.add("dark");
  }, []);

  return (
    <div>
      <h1 className={clsx(ETexts.TEXT)}>Hello man!!</h1>
      <Button className="w-16" bgColor={EButtonColors.LIGHT}>
        123
      </Button>
    </div>
  );
}

export default App;
