import styled, { css } from "styled-components";
import { BiWindowClose } from "react-icons/bi";
import { useForm } from "react-hook-form";

import Button from "../../ui/Button";
import Input from "../../ui/Input";
import SpinnerMini from "../../ui/SpinnerMini";
import FormRowVertical from "../../ui/FormRowVertical";
import Form from "../../ui/Form";
import Heading from "../../ui/Heading";
import ButtonIcon from "../../ui/ButtonIcon";

import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";

const CloseImage = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: end;

  &:not(:last-child) {
    margin-bottom: 1.6rem;
  }

  ${(props) => {
    if (props.line === "column")
      return css`
        flex-direction: column;
        align-items: end;
      `;
  }}
`;

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

function ProfileSettings({ exerciserData, refetch }) {
  const { user } = useUser();
  const { updateUser, isUpdating } = useUpdateUser();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { ...exerciserData },
  });

  function onSubmit(data) {
    const updatedUser = { ...data, userid: user.id };
    updateUser(
      {
        updatedUser,
        userExist: Boolean(exerciserData),
      },
      {
        onSuccess: () => {
          refetch();
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical>
        <Heading as="h3">
          {exerciserData
            ? "Update profile"
            : "Enter the data so that other users can see your profile"}
        </Heading>
      </FormRowVertical>
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

      <FormRowVertical label="Change Avatar Image">
        <Input
          id="avatar"
          type="file"
          disabled={isUpdating}
          onChange={(e) => setValue("avatar", e.target.files[0])}
          style={{ display: "none" }}
        />
      </FormRowVertical>

      {watch("avatar") && (
        <CloseImage line="column">
          <ButtonIcon
            variation="tertiary"
            disabled={isUpdating}
            onClick={() => setValue("avatar", null)}
          >
            <BiWindowClose />
          </ButtonIcon>
          <Image
            src={
              typeof watch("avatar") === "string"
                ? watch("avatar")
                : URL.createObjectURL(watch("avatar"))
            }
            alt="Avatar"
          />
        </CloseImage>
      )}

      <CloseImage>
        <Button
          disabled={isUpdating}
          variation="primary"
          type="button"
          onClick={() => reset(exerciserData)}
        >
          Cancle
        </Button>
        <Button type="submit" disabled={isUpdating}>
          {isUpdating ? <SpinnerMini /> : "Update"}
        </Button>
      </CloseImage>
    </Form>
  );
}

export default ProfileSettings;
