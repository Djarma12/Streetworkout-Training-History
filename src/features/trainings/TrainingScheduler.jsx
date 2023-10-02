import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  Appointments,
  WeekView,
  MonthView,
} from "@devexpress/dx-react-scheduler-material-ui";

const currentDate = "2018-11-01";
const schedulerData = [
  {
    startDate: "2018-11-01T09:45",
    endDate: "2018-11-01T11:00",
    title: "Meeting",
  },
  {
    startDate: "2018-11-01T12:00",
    endDate: "2018-11-01T13:30",
    title: "Go to a gym",
  },
];

function TrainingScheduler() {
  return (
    <Paper>
      <Scheduler data={schedulerData} height={660}>
        <ViewState currentDate={currentDate} />
        <MonthView
          name="January"
          displayName="January"
          //   timeTableCellComponent={TimeTableCell}
          //   dayScaleCellComponent={DayScaleCell}
        />
        <MonthView
          name="February"
          //   timeTableCellComponent={TimeTableCell}
          //   dayScaleCellComponent={DayScaleCell}
        />
        <Appointments />
      </Scheduler>
    </Paper>
  );
}

export default TrainingScheduler;
