import { Link } from "react-router-dom";

function TrainingItem({ training }) {
  return (
    <div key={training.id}>
      <Link to={`/trainings/${training.id}`}>
        {training.trainingName
          ? `See training ${training.trainingName}`
          : `Rest day ${training}`}
      </Link>
      <p>{training.trainingDate}</p>
      {/* <button onClick={() => deleteTraining(training.id)} disabled={isDeleting}>
        Delete training
      </button> */}
    </div>
  );
}

export default TrainingItem;
