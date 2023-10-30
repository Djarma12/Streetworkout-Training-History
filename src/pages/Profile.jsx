import ProfileSettings from "../features/authentication/ProfileSettings";
import { useUser } from "../features/authentication/useUser";
import { useExerciserData } from "../features/authentication/useExerciserData";

function Profile() {
  const { user } = useUser();
  const { isLoading, exerciserData } = useExerciserData(user.id);

  if (isLoading) return null;

  return <ProfileSettings exerciserData={exerciserData} />;
}

export default Profile;
