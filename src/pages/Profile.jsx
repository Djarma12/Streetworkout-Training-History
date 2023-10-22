import ProfileSettings from "../features/authentication/ProfileSettings";
import { useUser } from "../features/authentication/useUser";
import { useUserData } from "../features/authentication/useUserData";

function Profile() {
  const { user } = useUser();
  const { isLoading, userData } = useUserData(user.id);

  if (isLoading) return null;

  return <ProfileSettings userData={userData} />;
}

export default Profile;
