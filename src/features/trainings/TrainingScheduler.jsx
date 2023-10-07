import Paper from "@mui/material/Paper";
import { ViewState, IntegratedEditing } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  Appointments,
  WeekView,
  MonthView,
  DateNavigator,
  Toolbar,
  TodayButton,
  AppointmentTooltip,
  ViewSwitcher,
  ConfirmationDialog,
  AppointmentForm,
  EditRecurrenceMenu,
} from "@devexpress/dx-react-scheduler-material-ui";

import { format } from "date-fns";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useUser } from "../authentication/useUser";
import { useTrainingList } from "../../hooks/useTrainingList";
import { EditingState } from "@devexpress/dx-react-scheduler";
import { useCreateTraining } from "./useCreateTraining";

const currentDate = format(new Date(), "MM/dd/yyyy");

const StyledParagraph = styled.p`
  font-size: 1rem;
  margin-left: 6.4rem;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

function Content({ children, appointmentData, ...restProps }) {
  const { numPullUp, numDip, numPushUp, trainingStrength, description } =
    appointmentData;

  return (
    <AppointmentTooltip.Content
      {...restProps}
      appointmentData={appointmentData}
    >
      <StyledContent>
        <StyledParagraph>
          Num pull up: <span>{numPullUp}</span>
        </StyledParagraph>
        <StyledParagraph>
          Num dip: <span>{numDip}</span>
        </StyledParagraph>
        <StyledParagraph>
          Num push up: <span>{numPushUp}</span>
        </StyledParagraph>
        <StyledParagraph>
          Training strength: <span>{trainingStrength}</span>
        </StyledParagraph>
        <StyledParagraph>
          Description: <span>{description}</span>
        </StyledParagraph>
      </StyledContent>
    </AppointmentTooltip.Content>
  );
}

const TextEditor = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  if (props.type === "multilineTextEditor") {
    return null;
  }
  return <AppointmentForm.TextEditor {...props} />;
};

function BasicLayout({ onFieldChange, appointmentData, ...restProps }) {
  return (
    <AppointmentForm.BasicLayout
      appointmentData={appointmentData}
      onFieldChange={onFieldChange}
      {...restProps}
    >
      <AppointmentForm.Label text="Number pull up:" />
      <AppointmentForm.TextEditor
        value={appointmentData.numPullUp}
        onValueChange={(e) => onFieldChange({ numPullUp: e })}
        placeholder="130"
      />
      <AppointmentForm.Label text="Number dip:" />
      <AppointmentForm.TextEditor
        value={appointmentData.numDip}
        onValueChange={(e) => onFieldChange({ numDip: e })}
        placeholder="200"
      />
      <AppointmentForm.Label text="Number push up:" />
      <AppointmentForm.TextEditor
        value={appointmentData.numPushUp}
        onValueChange={(e) => onFieldChange({ numPushUp: e })}
        placeholder="300"
      />
      <AppointmentForm.Label text="Description:" />
      <AppointmentForm.TextEditor
        value={appointmentData.description}
        onValueChange={(e) => onFieldChange({ description: e })}
        placeholder="This training was so hard, but i successfully done."
      />
      <AppointmentForm.Label text="Strength:" />
      <AppointmentForm.Select
        value={appointmentData.trainingStrength}
        onValueChange={(e) => onFieldChange({ trainingStrength: e })}
        availableOptions={[
          { id: 1, text: "1" },
          { id: 2, text: "2" },
          { id: 3, text: "3" },
          { id: 4, text: "4" },
          { id: 5, text: "5" },
        ]}
      ></AppointmentForm.Select>
    </AppointmentForm.BasicLayout>
  );
}

function TrainingScheduler() {
  const { user } = useUser();
  const { createTraining, isCreating } = useCreateTraining(user.id);
  const { isLoading, trainings, startDayHour, endDayHour } = useTrainingList({
    exerciserId: user.id,
  });

  const [visible, setVisible] = useState(false);

  if (isLoading || isCreating) return null;

  function handleCommitChanges({ added: addTraining, changed, deleted }) {
    const {
      title,
      startDate,
      endDate,
      numPullUp,
      numDip,
      numPushUp,
      description,
      trainingStrength,
    } = addTraining;
    const newTraining = {
      title,
      startDate,
      endDate,
      numPullUp,
      numDip,
      numPushUp,
      description,
      trainingStrength,
    };
    if (addTraining) {
      console.log(newTraining);
      createTraining(newTraining);
    }
    if (changed) {
      console.log("ch");
    }
    if (deleted !== undefined) {
      console.log("del");
    }
  }

  return (
    <Paper>
      <Scheduler data={trainings} height={660}>
        <ViewState defaultCurrentDate={currentDate} />
        <Toolbar />
        <ViewSwitcher />
        <DateNavigator />
        <TodayButton />
        <MonthView />
        <WeekView
          startDayHour={startDayHour}
          endDayHour={endDayHour}
          cellDuration={60}
        />
        <EditingState onCommitChanges={handleCommitChanges} />
        <IntegratedEditing />
        <ConfirmationDialog />
        <Appointments />
        <AppointmentTooltip
          showOpenButton
          showDeleteButton
          showCloseButton
          contentComponent={Content}
        />
        <AppointmentForm
          basicLayoutComponent={BasicLayout}
          textEditorComponent={TextEditor}
          formComponent={BasicLayout}
        />
      </Scheduler>
    </Paper>
  );
}

export default TrainingScheduler;
