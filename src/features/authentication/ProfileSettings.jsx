import { useForm } from "react-hook-form";
import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";

function ProfileSettings({ userData }) {
  const { user } = useUser();
  const { updateUser, isUpdating } = useUpdateUser();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { ...userData },
  });

  if (isUpdating) return <Spinner />;

  function onSubmit(data) {
    console.log(data);
    const updatedUser = { ...data };
    updateUser({ updatedUser, oldAvatar: userData.avatar });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        disabled={isUpdating}
        placeholder="Jonas"
        {...register("nickName", { required: true })}
      />

      <input
        disabled={isUpdating}
        type="date"
        // value="2018-07-22"
        {...register("birthDate")}
      />

      {/* <input
        disabled={isUpdating}
        type="file"
        placeholder="Avatar"
        {...register("avatar")}
      /> */}

      <div>
        <img
          src={
            typeof watch("avatar") === "string"
              ? watch("avatar")
              : URL.createObjectURL(watch("avatar"))
          }
          alt="Avatar"
          style={{ maxWidth: "100px" }}
        />
        <label>
          <span>Change Avatar Image</span>
          <input
            disabled={isUpdating}
            type="file"
            onChange={(e) => setValue("avatar", e.target.files[0])}
            style={{ display: "none" }}
          />
        </label>
      </div>

      {errors.exampleRequired && <span>This field is required</span>}

      <Button disabled={isUpdating}>Update</Button>
    </form>
  );
}

export default ProfileSettings;
