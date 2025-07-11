// import React from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App";

// const root = createRoot(document.getElementById("root"));
// root.render(<App />);

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Optional: Global styles via CSS reset (if needed)
const containerStyle = {
  margin: 0,
  padding: 0,
  fontFamily: "'Segoe UI', sans-serif",
  boxSizing: "border-box",
  width: "100%",
  minHeight: "100vh",
  overflowX: "hidden",
};

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);
root.render(
  <div style={containerStyle}>
    <App />
  </div>
);
