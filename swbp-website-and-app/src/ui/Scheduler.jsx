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

import Content from "./Content";
import TextEditor from "./TextEditor";

const Appointment = ({ children, style, ...restProps }) => (
  <Appointments.Appointment
    {...restProps}
    style={{
      ...style,
      backgroundColor: "var(--color-blue-700)",
      borderRadius: "8px",
      fontSize: "1rem",
    }}
  >
    {children}
  </Appointments.Appointment>
);

function TrainingScheduler({
  trainings,
  startDayHour,
  endDayHour,
  onCommitChanges,
}) {
  const isUser = Boolean(onCommitChanges);

  return (
    <Paper
      style={{
        backgroundColor: "var(--color-grey-100)",
        border: "1px solid var(--color-grey-200)",
      }}
    >
      <Scheduler data={trainings}>
        <ViewState />
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
        <Appointments appointmentComponent={Appointment} />

        <EditingState onCommitChanges={onCommitChanges} />
        <IntegratedEditing />
        <AppointmentTooltip
          showOpenButton={isUser}
          showDeleteButton={isUser}
          showCloseButton
          contentComponent={Content}
        />

        {isUser && (
          <AppointmentForm
            basicLayoutComponent={BasicLayout}
            textEditorComponent={TextEditor}
          />
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
