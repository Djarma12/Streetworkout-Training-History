import { Controller, useForm } from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
import { TextField } from "@mui/material";

import { useUser } from "../authentication/useUser";
import { formatDate, removeEmptyProperties } from "../../utils/helpers";
import { useCreateTraining } from "./useCreateTraining";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import FormRowVertical from "../../ui/FormRowVertical";
import SpinnerMini from "../../ui/SpinnerMini";

function CreateTrainingForm() {
  const { user } = useUser();
  const { createTraining, isCreating } = useCreateTraining(user.id);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  function onSubmit(addTraining) {
    const newTraining = {
      ...removeEmptyProperties(addTraining),
      startDate: formatDate(addTraining.startDate),
      endDate: formatDate(addTraining.endDate),
      userid: user.id,
    };
    createTraining(newTraining);
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="Start training:" error={errors?.startDate?.message}>
          <Controller
            name="startDate"
            disabled={isCreating}
            control={control}
            defaultValue={null}
            rules={{ required: "This field is required" }}
            render={({ field }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  {...field}
                  renderInput={(props) => (
                    <TextField {...props} label="" variant="outlined" />
                  )}
                />
              </LocalizationProvider>
            )}
          />
        </FormRow>
        <FormRow label="End training:" error={errors?.endDate?.message}>
          <Controller
            name="endDate"
            disabled={isCreating}
            defaultValue={null}
            control={control}
            rules={{
              required: "This field is required",
              validate: (value) =>
                value &&
                watch("startDate") &&
                dayjs(value).diff(dayjs(watch("startDate"), "minutes")) < 5
                  ? "The end date must be greater than the start date"
                  : true,
            }}
            render={({ field }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  {...field}
                  // label="Start training"
                  renderInput={(props) => (
                    <TextField {...props} label="" variant="outlined" />
                  )}
                />
              </LocalizationProvider>
            )}
          />
        </FormRow>
        <FormRow label="Training name:" error={errors?.title?.message}>
          <Input
            type="text"
            id="title"
            disabled={isCreating}
            placeholder="Emom"
            {...register("title", {
              required: "This field is required",
            })}
          />
        </FormRow>
        <FormRow label="Num pull up:" error={errors?.numPullUp?.message}>
          <Input
            type="number"
            id="numPullUp"
            disabled={isCreating}
            placeholder="200"
            {...register("numPullUp", {
              min: {
                value: 0,
                message: "Enter a positive number.",
              },
            })}
          />
        </FormRow>
        <FormRow label="Num dip:" error={errors?.numDip?.message}>
          <Input
            type="number"
            id="numDip"
            disabled={isCreating}
            placeholder="200"
            {...register("numDip", {
              min: {
                value: 0,
                message: "Enter a positive number.",
              },
            })}
          />
        </FormRow>
        <FormRow label="Num push up:" error={errors?.numPushUp?.message}>
          <Input
            type="number"
            id="numPushUp"
            disabled={isCreating}
            placeholder="100"
            {...register("numPushUp", {
              min: {
                value: 0,
                message: "Enter a positive number.",
              },
            })}
          />
        </FormRow>
        <FormRow label="Description:" error={errors?.description?.message}>
          <Input
            as="textarea"
            id="description"
            disabled={isCreating}
            placeholder="Done with a 20-minute exercise, 10 pull-ups and dips per minute, and at the end of the training, 100 push-ups."
            {...register("description")}
          />
        </FormRow>
        <FormRow
          label="Training strength:"
          error={errors?.trainingStrength?.message}
        >
          <Input
            type="number"
            id="trainingStrength"
            disabled={isCreating}
            {...register("trainingStrength")}
          />
        </FormRow>
        <FormRowVertical>
          <Button type="submit" disabled={isCreating}>
            {isCreating ? <SpinnerMini /> : "Add new training"}
          </Button>
        </FormRowVertical>
      </Form>
    </>
  );
}

export default CreateTrainingForm;
