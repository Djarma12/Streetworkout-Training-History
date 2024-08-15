import { isTabPort } from "../utils/helpers";
import ButtonIcon from "./ButtonIcon";
import { BiMenuAltRight, BiWindowClose } from "react-icons/bi";
import { useSidebar } from "../context/SidebarProvider";

function ToggleSidebar() {
  const { isOpen, toggleOpen } = useSidebar();

  return (
    <>
      {isTabPort() && (
        <ButtonIcon variation="tertiary" onClick={toggleOpen}>
          {isOpen ? <BiWindowClose /> : <BiMenuAltRight />}
        </ButtonIcon>
      )}
    </>
  );
}

export default ToggleSidebar;
