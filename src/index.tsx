import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store, persistor } from "./app/store";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./index.css";

<link
  href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Noto+Sans+Khmer&family=Roboto&display=swap"
  rel="stylesheet"
></link>;
// import "bootstrap/dist/css/bootstrap.min.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  // <React.StrictMode>
  // <PersistGate persistor={persistor}>
  <Provider store={store}>
    <App />
  </Provider>
  // </PersistGate>
  // </React.StrictMode>
);
