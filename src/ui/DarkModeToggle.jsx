import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon variation="tertiary" onClick={toggleDarkMode}>
      {isDarkMode ? <BiSolidSun /> : <BiSolidMoon />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
