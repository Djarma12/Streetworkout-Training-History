import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const StyledHeaderHeading = styled.h1`
  font-size: 2.4rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--color-grey-500);
`;

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
  // console.log(heading);

  return <StyledHeaderHeading>{heading}</StyledHeaderHeading>;
}

export default HeaderHeading;
