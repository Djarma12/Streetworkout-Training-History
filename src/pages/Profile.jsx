import ProfileSettings from "../features/authentication/ProfileSettings";
import { useUser } from "../features/authentication/useUser";
import { useExerciserData } from "../features/authentication/useExerciserData";
import Spinner from "../ui/Spinner";

function Profile() {
  const { user } = useUser();
  const { isLoading, exerciserData } = useExerciserData(user.id);

  if (isLoading) return <Spinner />;

  return <ProfileSettings exerciserData={exerciserData} />;
}

export default Profile;
