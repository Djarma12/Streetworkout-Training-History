import { useForm } from "react-hook-form";
import { useUser } from "../authentication/useUser";
import { useCreateTraining } from "./useCreateTraining";
import Input from "../../ui/Input";
import { Paper } from "@mui/material";
import {
  AppointmentForm,
  Scheduler,
} from "@devexpress/dx-react-scheduler-material-ui";
import BasicLayout from "../../ui/BasicLayout";
import TextEditor from "../../ui/TextEditor";
import { EditingState } from "@devexpress/dx-react-scheduler";
import { IntegratedEditing } from "@devexpress/dx-react-scheduler";

import styled from "styled-components";
import { formatDate } from "../../utils/helpers";
import { useTrainingList } from "../../hooks/useTrainingList";
import { useState } from "react";
import Spinner from "../../ui/Spinner";

const StyledForm = styled.div`
  width: 55rem;
  height: 100%;
  margin-inline: auto;
`;
const Overlay = styled.div`
  background-color: var(--color-grey-50);
`;

function CustomOverlay({ children }) {
  return <Overlay>{children}</Overlay>;
}

function CreateTrainingForm() {
  const { user } = useUser();
  const { createTraining, isCreating } = useCreateTraining(user.id);

  const { isLoading, trainings, startDayHour, endDayHour } = useTrainingList({
    exerciserId: user.id,
  });
  const [state, setState] = useState({
    title: "Meeting with Client",
    startDate: new Date(2023, 10, 15, 10, 0), // Date and time
    endDate: new Date(2023, 10, 15, 11, 0), // Date and time
    // Other properties like location, description, etc.
  });

  if (isCreating || isLoading) return <Spinner />;

  function handleCommitChanges({ added: addTraining }) {
    if (addTraining) {
      const newTraining = {
        title: addTraining.title,
        startDate: formatDate(addTraining.startDate),
        endDate: formatDate(addTraining.endDate),
        numPullUp: addTraining.numPullUp,
        numDip: addTraining.numDip,
        numPushUp: addTraining.numPullUp,
        description: addTraining.description,
        trainingStrength: addTraining.trainingStrength,
        userid: user.id,
      };
      createTraining(newTraining);
    }
  }
  function handleChange(e) {
    console.log(e);
  }
  return (
    <>
      <StyledForm>
        <Paper>
          <Scheduler height={660}>
            <EditingState onCommitChanges={handleCommitChanges} />
            <IntegratedEditing />
            <AppointmentForm
              overlayComponent={CustomOverlay}
              basicLayoutComponent={BasicLayout}
              textEditorComponent={TextEditor}
              appointmentData={state}
              onAppointmentDataChange={handleChange}
              // formComponent={BasicLayout}
            />
          </Scheduler>
        </Paper>
      </StyledForm>
    </>
  );
}

export default CreateTrainingForm;
