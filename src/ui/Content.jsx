import { AppointmentTooltip } from "@devexpress/dx-react-scheduler-material-ui";
import styled from "styled-components";

const StyledParagraph = styled.p`
  font-size: 1rem;
  margin-left: 6.4rem;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

function Content({ children, appointmentData, ...restProps }) {
  const { numPullUp, numDip, numPushUp, trainingStrength, description } =
    appointmentData;

  return (
    <AppointmentTooltip.Content
      {...restProps}
      appointmentData={appointmentData}
    >
      <StyledContent>
        <StyledParagraph>
          Num pull up: <span>{numPullUp}</span>
        </StyledParagraph>
        <StyledParagraph>
          Num dip: <span>{numDip}</span>
        </StyledParagraph>
        <StyledParagraph>
          Num push up: <span>{numPushUp}</span>
        </StyledParagraph>
        <StyledParagraph>
          Training strength: <span>{trainingStrength}</span>
        </StyledParagraph>
        <StyledParagraph>
          Description: <span>{description}</span>
        </StyledParagraph>
      </StyledContent>
    </AppointmentTooltip.Content>
  );
}

export default Content;
