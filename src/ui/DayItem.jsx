import styled from "styled-components";

const StyledDay = styled.span`
  background-color: var(--color-grey-100);
  padding: 1.2rem 2.4rem;
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-md);
`;

function DayItem({ day }) {
  return <StyledDay>{day}</StyledDay>;
}

export default DayItem;
