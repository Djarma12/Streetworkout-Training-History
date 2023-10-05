import { useQuery } from "@tanstack/react-query";
import { getTraining } from "../services/apiExercisers";

export function useTrainingList({ exerciserId }) {
  const {
    isLoading,
    data: trainings = [],
    error,
  } = useQuery({
    queryKey: ["exerciserTrainings", exerciserId],
    queryFn: () => getTraining({ exerciserId }),
  });

  // Funkcija za izvlačenje satova iz datuma
  function getHoursFromDate(dateString) {
    return new Date(dateString).getHours();
  }

  // Koristimo map() i spread operator (...) za izvlačenje satova iz datuma
  const hoursArray = trainings?.map((training) => ({
    startHour: getHoursFromDate(training.startDate),
    endHour: getHoursFromDate(training.endDate),
  }));

  const startDayHour = Math.min(...hoursArray.map((item) => item.startHour));
  const endDayHour = Math.max(...hoursArray.map((item) => item.endHour));

  return { isLoading, trainings, startDayHour, endDayHour, error };
}
