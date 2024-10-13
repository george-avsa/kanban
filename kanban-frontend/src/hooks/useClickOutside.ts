import { useEffect } from "react";

const useClickOutside = (element: HTMLElement | null, onClose: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        element &&
        event?.target &&
        !element.contains(event.target as HTMLElement)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
};

export default useClickOutside;
