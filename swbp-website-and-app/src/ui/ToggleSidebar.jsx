import { BiMenuAltRight, BiWindowClose } from "react-icons/bi";
import { useSidebar } from "../context/SidebarProvider";
import { isTabPort } from "../utils/helpers";
import ButtonIcon from "./ButtonIcon";

function ToggleSidebar({ variation = "tertiary" }) {
  const { isOpen, toggleOpen } = useSidebar();

  return (
    <>
      {isTabPort() && (
        <ButtonIcon variation={variation} onClick={toggleOpen}>
          {isOpen ? <BiWindowClose /> : <BiMenuAltRight />}
        </ButtonIcon>
      )}
    </>
  );
}

export default ToggleSidebar;
