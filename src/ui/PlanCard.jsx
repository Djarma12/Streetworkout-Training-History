import styled from "styled-components";

const StyledPlanCard = styled.li`
  height: 52rem;
  padding: 3rem;
  background-color: orangered;
`;

function PlanCard({ plan }) {
  const { name, price, include, notInclude } = plan;
  return <StyledPlanCard>PlanCard</StyledPlanCard>;
}

export default PlanCard;
