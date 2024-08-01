import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { StyleSheetManager } from "styled-components";
import App from "./App.jsx";
import ErrorFallback from "./ui/ErrorFallback.jsx";
import { shouldForwardProp } from "./utils/helpers.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace("/")}
    >
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <App />
      </StyleSheetManager>
    </ErrorBoundary>
  </React.StrictMode>
);
