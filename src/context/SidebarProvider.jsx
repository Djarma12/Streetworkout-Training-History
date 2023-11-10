import { createContext, useContext, useEffect, useState } from "react";
import { isTabPort } from "../utils/helpers";

const SidebarContext = createContext();

function SidebarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => !isTabPort() && setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      // 900 is tabPort size in px
      if (isTabPort()) {
        setIsOpen(true);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function toggleOpen() {
    setIsOpen((isOpen) => !isOpen);
    console.log(isOpen);
  }

  return (
    <SidebarContext.Provider value={{ isOpen, toggleOpen, close }}>
      {children}
    </SidebarContext.Provider>
  );
}

function CloseSidebar({ children }) {
  const { close } = useContext(SidebarContext);
  return <div onClick={close}>{children}</div>;
}

SidebarProvider.CloseSidebar = CloseSidebar;

function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined)
    throw new Error("SidebarContext was used outside of SidebarProvider");
  return context;
}

export { SidebarProvider, useSidebar };
