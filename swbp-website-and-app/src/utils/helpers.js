import isPropValid from "@emotion/is-prop-valid";
import { differenceInYears, format } from "date-fns";
import { mediaQueryValues } from "../styles/MediaQueryManager";

// export function currentExerciser({ exercisers, exerciserId }) {
//   const [exerciser] = exercisers.filter(
//     (exerciser) => exerciser.userid === exerciserId
//   );
//   console.log(exerciser);
//   return exerciser;
// }

// Format for supabase and scheduler
export function formatDate(date) {
  return format(new Date(date), "yyyy-MM-dd'T'HH:mm:ssXXX");
}

export function formatDMY(birthDate) {
  return format(new Date(birthDate), "dd/MM/yyyy");
}

// Calculating how old the user is
export function age(birthDate) {
  return differenceInYears(new Date(), new Date(birthDate));
}

// Remove properties that are "" from obj
export function removeEmptyProperties(addTraining) {
  return Object.entries(addTraining)
    .filter(([key, value]) => value !== "")
    .reduce((obj, [key, value]) => {
      obj[key] = value;
      return obj;
    }, {});
}

// For sidebar in response
export function isTabPort() {
  return window.innerWidth < mediaQueryValues.tabPort;
}

export function shouldForwardProp(propName, target) {
  if (typeof target === "string") {
    // For HTML elements, forward the prop if it is a valid HTML attribute
    return isPropValid(propName);
  }
  // For other elements, forward all props
  return true;
}

// Use for display HeaderHome
export function debounceCallback(scrollDirection, setScrollDirection) {
  return (lastScrollY, handleLastScroll) => {
    const scrollY = window.pageYOffset;
    let direction = "";
    if (scrollY < 100) {
      direction = "";
    } else {
      direction = scrollY > lastScrollY ? "down" : "up";
    }
    if (
      direction !== scrollDirection &&
      (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
    ) {
      setScrollDirection(direction);
    }
    handleLastScroll(scrollY > 0 ? scrollY : 0);
  };
}
