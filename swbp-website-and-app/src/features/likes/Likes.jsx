import LikeButton from "../../ui/LikeButton";
import SpinnerMini from "../../ui/SpinnerMini";
import { useLikes } from "./useLikes";

function Likes() {
  const { likes, isLoading } = useLikes();

  if (isLoading) return <SpinnerMini />;

  return <LikeButton likes={likes} />;
}

export default Likes;
