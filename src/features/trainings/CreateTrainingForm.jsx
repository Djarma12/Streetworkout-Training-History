import { useForm } from "react-hook-form";
import { useUser } from "../authentication/useUser";
import { useCreateTraining } from "./useCreateTraining";
import Input from "../../ui/Input";

function CreateTrainingForm() {
  const { register, reset, handleSubmit } = useForm();
  const { user } = useUser({
    defaultValues: {
      title: "",
      numDip: "",
      description: "",
    },
  });
  const { createTraining, isCreating } = useCreateTraining(user.id);

  function onSubmit(data) {
    const newTraining = {
      ...data,
      userid: user.id,
    };
    createTraining(newTraining, { onSuccess: () => reset() });
  }

  return (
    <>
      <p>Create Training Form</p>
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
      </form>
    </>
  );
}

export default CreateTrainingForm;
