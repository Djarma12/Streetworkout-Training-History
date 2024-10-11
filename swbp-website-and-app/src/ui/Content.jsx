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
        {numPullUp && (
          <StyledParagraph>
            Num pull up: <span>{numPullUp}</span>
          </StyledParagraph>
        )}
        {numDip && (
          <StyledParagraph>
            Num dip: <span>{numDip}</span>
          </StyledParagraph>
        )}
        {numPushUp && (
          <StyledParagraph>
            Num push up: <span>{numPushUp}</span>
          </StyledParagraph>
        )}
        {trainingStrength && (
          <StyledParagraph>
            Training strength: <span>{trainingStrength}</span>
          </StyledParagraph>
        )}
        {description && (
          <StyledParagraph>
            Description: <span>{description}</span>
          </StyledParagraph>
        )}
      </StyledContent>
    </AppointmentTooltip.Content>
  );
}

export default Content;
