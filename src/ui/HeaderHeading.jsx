import { useLocation, useParams } from "react-router-dom";
import Heading from "./Heading";

const Headings = {
  "/trainings": "My training history",
  "/trainings/new": "Create new training",
  "/exercisers": "List of exercisers",
  "/profile": "Profile settings",
  trainingDetail: "Training detail",
};

// function changeHeadings({}) {}

function HeaderHeading() {
  const location = useLocation();
  const { trainingId, exerciserId } = useParams();

  // console.log(Number.isFinite(+location.pathname.split("/")[2]));

  let heading = Headings[location.pathname];
  if (heading === undefined && trainingId) {
    heading = `Training detail`;
  } else if (heading === undefined && exerciserId) {
    heading = `Exerciser: `;
  }

  return <Heading as="h2">{heading}</Heading>;
}

export default HeaderHeading;
