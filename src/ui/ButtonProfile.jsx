import { BiUserCircle } from "react-icons/bi";
import ButtonIcon from "./ButtonIcon";
import { Link } from "react-router-dom";

function ButtonProfile() {
  return (
    <ButtonIcon variation="primary">
      <Link to="/profile">
        <BiUserCircle />
      </Link>
    </ButtonIcon>
  );
}

export default ButtonProfile;
