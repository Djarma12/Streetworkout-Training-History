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
import styled from "styled-components";

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
  // const { register, reset, handleSubmit } = useForm();
  // const { user } = useUser({
  //   defaultValues: {
  //     title: "",
  //     numDip: "",
  //     description: "",
  //   },
  // });
  // const { createTraining, isCreating } = useCreateTraining(user.id);

  // function onSubmit(data) {
  //   const newTraining = {
  //     ...data,
  //     userid: user.id,
  //   };
  //   createTraining(newTraining, { onSuccess: () => reset() });
  // }

  return (
    <>
      {/* <p>Create Training Form</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="number"
          placeholder="num dip"
          {...register("numDip", {
            disabled: isCreating,
            valueAsNumber: true,
          })}
        />
        <input
          type="text"
          placeholder="description"
          {...register("description", {
            required: true,
            disabled: isCreating,
          })}
        />

        <input
          type="text"
          placeholder="Emom, super set"
          {...register("title", {
            required: true,
            disabled: isCreating,
          })}
        />

        <input type="submit" />
      </form> */}
      <StyledForm>
        <Paper>
          <Scheduler height={660}>
            <AppointmentForm
              overlayComponent={CustomOverlay}
              basicLayoutComponent={BasicLayout}
              textEditorComponent={TextEditor}
              // commandLayoutComponent={{ hideDeleteButton: true }}
              // formComponent={BasicLayout}
            />
          </Scheduler>
        </Paper>
      </StyledForm>
    </>
  );
}

export default CreateTrainingForm;
