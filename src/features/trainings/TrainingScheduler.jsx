// import Paper from "@mui/material/Paper";
// import { ViewState, IntegratedEditing } from "@devexpress/dx-react-scheduler";
// import {
//   Scheduler,
//   Appointments,
//   WeekView,
//   MonthView,
//   DateNavigator,
//   Toolbar,
//   TodayButton,
//   AppointmentTooltip,
//   ViewSwitcher,
//   ConfirmationDialog,
//   AppointmentForm,
// } from "@devexpress/dx-react-scheduler-material-ui";
// import { format } from "date-fns";
// import { useEffect, useState } from "react";
// import styled from "styled-components";
// import { useUser } from "../authentication/useUser";
// import { useTrainingList } from "../../hooks/useTrainingList";
// import { EditingState } from "@devexpress/dx-react-scheduler";
// import { useCreateTraining } from "./useCreateTraining";
// import { useDeleteTraining } from "./useDeleteTraining";
// import { formatDate } from "../../utils/helpers";
// import { useUpdateTraining } from "./useUpdateTraining";
// import Spinner from "../../ui/Spinner";

// const currentDate = format(new Date(), "MM/dd/yyyy");

// const StyledParagraph = styled.p`
//   font-size: 1rem;
//   margin-left: 6.4rem;
// `;

// const StyledContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.8rem;
// `;

// function Content({ children, appointmentData, ...restProps }) {
//   const { numPullUp, numDip, numPushUp, trainingStrength, description } =
//     appointmentData;

//   return (
//     <AppointmentTooltip.Content
//       {...restProps}
//       appointmentData={appointmentData}
//     >
//       <StyledContent>
//         <StyledParagraph>
//           Num pull up: <span>{numPullUp}</span>
//         </StyledParagraph>
//         <StyledParagraph>
//           Num dip: <span>{numDip}</span>
//         </StyledParagraph>
//         <StyledParagraph>
//           Num push up: <span>{numPushUp}</span>
//         </StyledParagraph>
//         <StyledParagraph>
//           Training strength: <span>{trainingStrength}</span>
//         </StyledParagraph>
//         <StyledParagraph>
//           Description: <span>{description}</span>
//         </StyledParagraph>
//       </StyledContent>
//     </AppointmentTooltip.Content>
//   );
// }

// const TextEditor = (props) => {
//   // eslint-disable-next-line react/destructuring-assignment
//   if (props.type === "multilineTextEditor") {
//     return null;
//   }
//   return <AppointmentForm.TextEditor {...props} />;
// };

// function BasicLayout({ onFieldChange, appointmentData, ...restProps }) {
//   useEffect(function () {
//     const [removeDiv] = Array.from(document.querySelectorAll("span")).filter(
//       (span) => span.textContent === "All Day"
//     );
//     removeDiv?.closest("div").remove();
//   }, []);

//   return (
//     <AppointmentForm.BasicLayout
//       appointmentData={appointmentData}
//       onFieldChange={onFieldChange}
//       {...restProps}
//     >
//       <AppointmentForm.Label text="Number pull up:" />
//       <AppointmentForm.TextEditor
//         value={appointmentData.numPullUp}
//         onValueChange={(e) => onFieldChange({ numPullUp: e })}
//         placeholder="130"
//       />
//       <AppointmentForm.Label text="Number dip:" />
//       <AppointmentForm.TextEditor
//         value={appointmentData.numDip}
//         onValueChange={(e) => onFieldChange({ numDip: e })}
//         placeholder="200"
//       />
//       <AppointmentForm.Label text="Number push up:" />
//       <AppointmentForm.TextEditor
//         value={appointmentData.numPushUp}
//         onValueChange={(e) => onFieldChange({ numPushUp: e })}
//         placeholder="300"
//       />
//       <AppointmentForm.Label text="Description:" />
//       <AppointmentForm.TextEditor
//         value={appointmentData.description}
//         onValueChange={(e) => onFieldChange({ description: e })}
//         placeholder="This training was so hard, but i successfully done."
//       />
//       <AppointmentForm.Label text="Strength:" />
//       <AppointmentForm.Select
//         value={appointmentData.trainingStrength || "1"}
//         onValueChange={(e) => onFieldChange({ trainingStrength: e })}
//         availableOptions={[
//           { id: 1, text: "1" },
//           { id: 2, text: "2" },
//           { id: 3, text: "3" },
//           { id: 4, text: "4" },
//           { id: 5, text: "5" },
//         ]}
//       ></AppointmentForm.Select>
//     </AppointmentForm.BasicLayout>
//   );
// }

// function TrainingScheduler() {
//   const { user } = useUser();
//   const { isLoading, trainings, startDayHour, endDayHour } = useTrainingList({
//     exerciserId: user.id,
//   });
//   const { createTraining, isCreating } = useCreateTraining(user.id);
//   const { deleteTraining, isDeleting } = useDeleteTraining();
//   const { updateTraining, isUpdating } = useUpdateTraining(user.id);

//   if (isLoading || isCreating || isDeleting || isUpdating) return <Spinner />;

//   function handleCommitChanges({ added: addTraining, changed, deleted }) {
//     if (addTraining) {
//       const newTraining = {
//         title: addTraining.title,
//         startDate: formatDate(addTraining.startDate),
//         endDate: formatDate(addTraining.endDate),
//         numPullUp: addTraining.numPullUp,
//         numDip: addTraining.numDip,
//         numPushUp: addTraining.numPullUp,
//         description: addTraining.description,
//         trainingStrength: addTraining.trainingStrength,
//         userid: user.id,
//       };
//       createTraining(newTraining);
//     }
//     if (changed) {
//       const [trainingId] = Object.keys(changed);
//       const updatedFields = Object.values(changed)[0];
//       updateTraining({ trainingId, updatedFields });
//     }
//     if (deleted !== undefined) {
//       deleteTraining(deleted);
//     }
//   }

//   return (
//     <Paper>
//       <Scheduler data={trainings} height={660}>
//         <ViewState defaultCurrentDate={currentDate} />
//         <Toolbar />
//         <ViewSwitcher />
//         <DateNavigator />
//         <TodayButton />
//         <MonthView />
//         <WeekView
//           startDayHour={startDayHour}
//           endDayHour={endDayHour}
//           cellDuration={60}
//         />
//         <EditingState onCommitChanges={handleCommitChanges} />
//         <IntegratedEditing />
//         <Appointments />
//         <AppointmentTooltip
//           showOpenButton
//           showDeleteButton
//           showCloseButton
//           contentComponent={Content}
//         />
//         <AppointmentForm
//           basicLayoutComponent={BasicLayout}
//           textEditorComponent={TextEditor}
//           formComponent={BasicLayout}
//         />
//         <ConfirmationDialog
//           messages={{
//             confirmDeleteMessage:
//               "Are you sure you want to delete this training?",
//           }}
//         />
//       </Scheduler>
//     </Paper>
//   );
// }

// export default TrainingScheduler;
