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
import { EditingState } from "@devexpress/dx-react-scheduler";

import BasicLayout from "./BasicLayout";

import { formatCurrentDate } from "../utils/helpers";
import Content from "./Content";
import TextEditor from "./TextEditor";

function TrainingScheduler({
  trainings,
  startDayHour,
  endDayHour,
  onCommitChanges,
}) {
  const isUser = Boolean(onCommitChanges);

  return (
    <Paper>
      <Scheduler data={trainings} height={660}>
        <ViewState defaultCurrentDate={formatCurrentDate()} />
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
        <Appointments />

        <EditingState onCommitChanges={onCommitChanges} />
        <IntegratedEditing />
        <AppointmentTooltip
          showOpenButton={isUser}
          showDeleteButton={isUser}
          showCloseButton
          contentComponent={Content}
        />

        {isUser && (
          <>
            <AppointmentForm
              basicLayoutComponent={BasicLayout}
              textEditorComponent={TextEditor}
              formComponent={BasicLayout}
            />
          </>
        )}
        <ConfirmationDialog
          messages={{
            confirmDeleteMessage:
              "Are you sure you want to delete this training?",
          }}
        />
      </Scheduler>
    </Paper>
  );
}

export default TrainingScheduler;
