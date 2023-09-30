import styled from "styled-components";
import DayItem from "../../ui/DayItem";
import Trainings from "./Trainings";

const TrainingDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  align-items: center;
  gap: 1.2rem;
  grid-template-rows: 4.8rem auto;
`;

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function TrainingList() {
  return (
    <TrainingDays>
      {daysOfWeek.map((day) => (
        <DayItem day={day} key={day} />
      ))}
      <Trainings />
    </TrainingDays>
  );
}

export default TrainingList;
