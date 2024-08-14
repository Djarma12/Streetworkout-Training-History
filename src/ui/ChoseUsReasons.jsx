import styled from "styled-components";
import { choseUsReasons } from "../assets/chose-us.json";
import Paragraph from "./Paragraph";

const StyledChoseUsReasons = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
  gap: 6.4rem;

  .chose-us {
    &__background {
      background-color: var(--color-grey-0);
      height: 8rem;
      width: 8rem;
      border-radius: 50%;
      margin-inline: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 2.4rem;
      transition: all 0.2s;

      &:hover {
        background-color: var(--color-red-100);
      }
    }
    &__image {
      height: 4.8rem;
      width: 4.8rem;
    }
    &__name {
      font-size: 2rem;
      font-weight: 700;
      display: inline-block;
      margin-bottom: 1.6rem;
    }
  }
`;

function ChoseUsReasons() {
  return (
    <StyledChoseUsReasons>
      {choseUsReasons.map((choseUsReason) => (
        <li key={choseUsReason.id}>
          <span className="chose-us__background">
            <img
              className="chose-us__image"
              src={choseUsReason.imgpath}
              alt="Chose us reason image"
            />
          </span>
          <span className="chose-us__name">{choseUsReason.name}</span>
          <Paragraph>{choseUsReason.description}</Paragraph>
        </li>
      ))}
    </StyledChoseUsReasons>
  );
}

export default ChoseUsReasons;
