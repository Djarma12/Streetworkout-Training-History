import { useForm } from "react-hook-form";
import { useUser } from "./useUser";

function ProfileSettings() {
  const { user } = useUser();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register("nickName")} />

      <input {...register("birthDate", { required: true })} />

      <input {...register("avatar", { required: true })} />

      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}

export default ProfileSettings;
