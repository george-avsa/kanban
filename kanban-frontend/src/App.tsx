import clsx from "clsx";
import { ETexts } from "./assets/fonts/ETexts";
import { useLayoutEffect, useState } from "react";
import Header from "./widgets/Header/ui/Header";
import NavigationItem from "./shared/NavigationItem/ui/NavigationItem";
import ThemeToggler from "./shared/ThemeToggler/ui/ThemeToggler";
import SidebarToggler from "./shared/SidebarToggler/ui/SidebarToggler";
import Sidebar from "./widgets/Sidebar/Sidebar";
import Board from "./widgets/Board/ui/Board";

function App() {
  useLayoutEffect(() => {
    const html = document.querySelector("html");
    // html?.classList.add("dark");
  }, []);

  const [active, setActive] = useState("");
  const [value, setValue] = useState("");

  return (
    <div className="h-screen w-screen bg-gray-100 dark:bg-black-100">
      <Header />
      <div className="relative flex h-[calc(100vh_-_64px)] w-full md:h-[calc(100vh_-_80px)] ">
        <Sidebar />
        <div className="h-full grow overflow-scroll border-t md:border-t-violet-100 md:dark:border-t-gray-300">
          <Board></Board>
        </div>
      </div>
    </div>
  );
}

export default App;
