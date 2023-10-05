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
} from "@devexpress/dx-react-scheduler-material-ui";
import { format } from "date-fns";
import { useState } from "react";
import styled from "styled-components";
import { useUser } from "../authentication/useUser";
import { useTrainingList } from "../../hooks/useTrainingList";
import { EditingState } from "@devexpress/dx-react-scheduler";

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

function TrainingScheduler() {
  const { user } = useUser();
  const { isLoading, trainings, startDayHour, endDayHour } = useTrainingList({
    exerciserId: user.id,
  });

  const [visible, setVisible] = useState(false);
  console.log(trainings);
  if (isLoading) return null;

  function handleCommitChanges({ added, changed, deleted }) {
    console.log("a");
    if (added) {
      console.log(added);
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
      <Scheduler title="A" data={trainings} height={660}>
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
        <AppointmentForm />
      </Scheduler>
    </Paper>
  );
}

export default TrainingScheduler;
