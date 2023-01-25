import React from "react";
import App from "./components/App";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const container: HTMLElement | null = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

// allows for live updating
if (module.hot !== undefined) {
  module.hot.accept();
}
