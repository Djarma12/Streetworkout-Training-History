import { BiLogOut } from "react-icons/bi";
import { useLogout } from "./useLogout";
import ButtonIcon from "../../ui/ButtonIcon";

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <ButtonIcon onClick={logout}>{isLoading ? null : <BiLogOut />}</ButtonIcon>
  );
}

export default Logout;
