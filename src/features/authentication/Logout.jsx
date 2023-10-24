import { BiLogOut } from "react-icons/bi";
import { useLogout } from "./useLogout";
import ButtonIcon from "../../ui/ButtonIcon";
import SpinnerMini from "../../ui/SpinnerMini";

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <ButtonIcon variation="primary" onClick={logout}>
      {isLoading ? <SpinnerMini /> : <BiLogOut />}
    </ButtonIcon>
  );
}

export default Logout;
