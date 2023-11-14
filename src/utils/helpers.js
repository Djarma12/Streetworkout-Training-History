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
