import { Link } from "react-router-dom";
import { useExercisersList } from "./useExercisersList";

function ExercisersList() {
  const { exercisers, isLoading } = useExercisersList();

  if (isLoading) return;

  return (
    <div>
      <p>Exercisers List</p>

      {exercisers.map((exerciser) => (
        <Link to={exerciser.userid} key={exerciser.id}>
          {exerciser.nickName}
        </Link>
      ))}
    </div>
  );
}

export default ExercisersList;
