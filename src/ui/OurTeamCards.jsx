import styled from "styled-components";
import { teamMembers } from "../assets/team-members.json";

const StyledOurTeamCards = styled.ul`
  max-width: 90rem;
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  gap: 1.6rem;

  li {
    height: 50rem;
    overflow: hidden;
    box-shadow: var(--shadow-md);

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: top;
      border-radius: var(--border-radius-sm);
    }
    picture:hover + div {
      transform: translateY(-19rem);
    }
  }

  .team-member-info {
    background-color: var(--color-grey-800);
    color: var(--color-red-50);
    text-align: center;
    padding-block: 9.6rem 6.4rem;
    padding-inline: 1.2rem;
    clip-path: polygon(100% 0, 100% 38%, 100% 100%, 0 100%, 0% 38%);
    transition: all 0.1s ease-in-out;
    font-weight: 500;
    font-size: 2rem;
    letter-spacing: 0.6px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 19rem;
      clip-path: polygon(100% 0, 100% 3%, 0 41%, 0% 0%);
      background-color: var(--color-blue-900);
    }

    &:hover {
      transform: translateY(-19rem);
    }
  }
`;

function OurTeamCards() {
  return (
    <StyledOurTeamCards>
      {teamMembers.map((teamMember) => (
        <li key={teamMember.id}>
          <picture>
            <source type="image/webp" srcSet={teamMember.imgpathWebp} />
            <source type="image/jpg" srcSet={teamMember.imgpathJpg} />
            <img
              src={teamMember.imgpathJpg}
              alt={`Team member image: ${teamMember.name}`}
            />
          </picture>
          <div className="team-member-info">
            <span>{teamMember.name}</span>
          </div>
        </li>
      ))}
    </StyledOurTeamCards>
  );
}

export default OurTeamCards;
