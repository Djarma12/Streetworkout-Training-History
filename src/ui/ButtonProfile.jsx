import { BiUserCircle } from "react-icons/bi";
import ButtonIcon from "./ButtonIcon";
import { Link } from "react-router-dom";
import { SidebarProvider } from "../context/SidebarProvider";

function ButtonProfile() {
  return (
    <SidebarProvider.CloseSidebar>
      <Link to="/profile">
        <ButtonIcon variation="primary">
          <BiUserCircle />
        </ButtonIcon>
      </Link>
    </SidebarProvider.CloseSidebar>
  );
}

export default ButtonProfile;
