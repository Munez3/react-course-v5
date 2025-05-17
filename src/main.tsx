import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const dirNames = [
  "0_firstComponent/App",
  "1_firstComponent/App",
  "2_props/App",
  "3_typescript/App",
  "4_events/App",
  "5_state/Button",
  "5_state/ButtonFixed",
  "5_state/App",
  "6.0_state/App",
  "6.1_state_event/App",
  "6.2_state_updater/Button",
  "6.3_state_event/App",
  "7_list/App",
  "8_conditionalRendering/App",
  "9_form/App",
  "10_state_list/App",
  "11_useRef/Component",
  "11_useRef/App",
  "12_style/App",
  "13.1_shared_state_example/App",
  "13.2_shared_state/App",
  "14.1_useReducer/App",
  "14.2_useReducer/App",
  "15_custom_hook/App",
  "16_router/App",
  "17_context/App",
  "18_context_router/App",
  "19_json_server/App",
  "20.1_axios/App",
  "20.2_axios_wrong_fetch/App",
  "21.1_useEffect_wrong_fetch/App",
  "21.2_useEffect/App",
];

const CURRENT_APP = 22; // Change this number to switch between different App components

// Dynamic import based on the current app number
const App = (await import(/* @vite-ignore */ `./${dirNames[CURRENT_APP]}`))
  .default;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
