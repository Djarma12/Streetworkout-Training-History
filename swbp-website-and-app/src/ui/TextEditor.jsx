import { AppointmentForm } from "@devexpress/dx-react-scheduler-material-ui";

function TextEditor(props) {
  // eslint-disable-next-line react/destructuring-assignment
  if (props.type === "multilineTextEditor") {
    return null;
  }
  return <AppointmentForm.TextEditor {...props} />;
}

export default TextEditor;
