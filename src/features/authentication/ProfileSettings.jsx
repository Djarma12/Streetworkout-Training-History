import { useForm } from "react-hook-form";
import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import FormRowVertical from "../../ui/FormRowVertical";
import Form from "../../ui/Form";
import styled from "styled-components";

const Image = styled.img`
  display: block;
  width: 20rem;
  border-radius: var(--border-radius-md);
  margin-inline: auto;
  background-image: linear-gradient(
      var(--gradient-brand-500),
      var(--gradient-brand-500)
    ),
    url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: top;
  aspect-ratio: 9 / 16;
  margin-bottom: 1.6rem;
`;

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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical label="Nick name" error={errors?.nickName?.message}>
        <Input
          type="text"
          id="nickName"
          disabled={isUpdating}
          {...register("nickName", { required: "This field is required" })}
        />
      </FormRowVertical>

      <FormRowVertical label="Birth date" error={errors?.birthDate?.message}>
        <Input
          type="date"
          id="birthDate"
          disabled={isUpdating}
          {...register("birthDate", {
            required: "This field is required",
            valueAsDate: true,
          })}
        />
      </FormRowVertical>

      {/* <input
        disabled={isUpdating}
        type="file"
        placeholder="Avatar"
        {...register("avatar")}
      /> */}

      <FormRowVertical label="Change Avatar Image">
        <Input
          disabled={isUpdating}
          id="avatar"
          type="file"
          onChange={(e) => setValue("avatar", e.target.files[0])}
          style={{ display: "none" }}
        />
      </FormRowVertical>

      {watch("avatar") && (
        <Image
          src={
            typeof watch("avatar") === "string"
              ? watch("avatar")
              : URL.createObjectURL(watch("avatar"))
          }
          alt="Avatar"
        />
      )}
      {/* <label>
          <span>Change Avatar Image</span>
          <input
            disabled={isUpdating}
            type="file"
            onChange={(e) => setValue("avatar", e.target.files[0])}
            style={{ display: "none" }}
          />
        </label> */}

      <FormRowVertical>
        <Button disabled={isUpdating}>Update</Button>
      </FormRowVertical>
    </Form>
  );
}

export default ProfileSettings;
