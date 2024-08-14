import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlice.jsx";

import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
