import { AppointmentForm } from "@devexpress/dx-react-scheduler-material-ui";
import { useEffect } from "react";

import { trainingStrengthValues } from "../utils/contants";

function BasicLayout({ onFieldChange, appointmentData, ...restProps }) {
  // Remove radio buttons
  useEffect(function () {
    const [removeDiv] = Array.from(document.querySelectorAll("span")).filter(
      (span) => span.textContent === "All Day"
    );
    removeDiv?.closest("div").remove();
  }, []);

  // Set appointment form to be on all over screen
  useEffect(function () {
    // This class work in my code
    // const form = document.querySelector(
    //   ".css-vr9er9-MuiModal-root-MuiDrawer-root"
    // );
    // For netlify
    const form = document.querySelector(".css-1nm0y4u");
    if (form) {
      form.style.position = "fixed";
    }
  }, []);

  return (
    <AppointmentForm.BasicLayout
      appointmentData={appointmentData}
      onFieldChange={onFieldChange}
      {...restProps}
    >
      <AppointmentForm.Label text="Number pull up:" />
      <AppointmentForm.TextEditor
        value={appointmentData.numPullUp}
        onValueChange={(e) => onFieldChange({ numPullUp: e })}
        placeholder="130"
      />
      <AppointmentForm.Label text="Number dip:" />
      <AppointmentForm.TextEditor
        value={appointmentData.numDip}
        onValueChange={(e) => onFieldChange({ numDip: e })}
        placeholder="200"
      />
      <AppointmentForm.Label text="Number push up:" />
      <AppointmentForm.TextEditor
        value={appointmentData.numPushUp}
        onValueChange={(e) => onFieldChange({ numPushUp: e })}
        placeholder="300"
      />
      <AppointmentForm.Label text="Description:" />
      <AppointmentForm.TextEditor
        value={appointmentData.description}
        onValueChange={(e) => onFieldChange({ description: e })}
        placeholder="This training was so hard, but i successfully done."
      />
      <AppointmentForm.Label text="Strength:" />
      <AppointmentForm.Select
        value={appointmentData.trainingStrength || "1"}
        onValueChange={(e) => onFieldChange({ trainingStrength: e })}
        availableOptions={trainingStrengthValues}
      ></AppointmentForm.Select>
    </AppointmentForm.BasicLayout>
  );
}

export default BasicLayout;
