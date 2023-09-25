import { useNavigate } from "react-router-dom";
import { useTrainingDetail } from "../../hooks/useTrainingDetail";

function ExerciserTrainingDetail() {
  const navigate = useNavigate();
  const { isLoading, trainingDetail } = useTrainingDetail();

  if (isLoading) return null;
  console.log(trainingDetail);

  return (
    <div>
      <p>Exerciser Training Detail</p>
      <p>{trainingDetail.trainingName}</p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}

export default ExerciserTrainingDetail;
