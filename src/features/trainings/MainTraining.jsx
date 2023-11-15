import TrainingScheduler from "../../ui/Scheduler";
import Spinner from "../../ui/Spinner";

import { useUser } from "../authentication/useUser";
import { useTrainingList } from "../../hooks/useTrainingList";
import { useCreateTraining } from "./useCreateTraining";
import { useDeleteTraining } from "./useDeleteTraining";
import { useUpdateTraining } from "./useUpdateTraining";
import { formatDate } from "../../utils/helpers";

function MainTraining() {
  const { user } = useUser();
  const { isLoading, trainings, startDayHour, endDayHour } = useTrainingList({
    exerciserId: user.id,
  });

  const { createTraining, isCreating } = useCreateTraining(user.id);
  const { deleteTraining, isDeleting } = useDeleteTraining();
  const { updateTraining, isUpdating } = useUpdateTraining(user.id);

  if (isLoading || isCreating || isDeleting || isUpdating) return <Spinner />;

  function handleCommitChanges({ added: addTraining, changed, deleted }) {
    if (addTraining && addTraining.title) {
      const newTraining = {
        title: addTraining.title,
        startDate: formatDate(addTraining.startDate),
        endDate: formatDate(addTraining.endDate),
        numPullUp: addTraining.numPullUp,
        numDip: addTraining.numDip,
        numPushUp: addTraining.numPushUp,
        description: addTraining.description,
        trainingStrength: addTraining.trainingStrength,
        userid: user.id,
      };
      createTraining(newTraining);
    }
    if (changed && Object.values(changed)[0].title !== "") {
      const [trainingId] = Object.keys(changed);
      const updatedFields = Object.values(changed)[0];
      updateTraining({ trainingId, updatedFields });
    }
    if (deleted !== undefined) {
      deleteTraining(deleted);
    }
  }

  return (
    <TrainingScheduler
      trainings={trainings}
      startDayHour={startDayHour}
      endDayHour={endDayHour}
      onCommitChanges={handleCommitChanges}
    />
  );
}

export default MainTraining;
