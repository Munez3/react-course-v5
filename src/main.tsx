import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const dirNames = [
  //0
  "0_firstComponent/App",
  //1
  "1_firstComponent/App",
  //2
  "2_props/App",
  //3
  "3_typescript/App",
  //4
  "4_events/App",
  //5
  "5_state/Button",
  //6
  "5_state/ButtonFixed",
  //7
  "5_state/App",
  //8
  "6.0_state/App",
  //9
  "6.1_state_event/App",
  //10
  "6.2_state_updater/Button",
  //11
  "6.3_state_event/App",
  //12
  "7_list/App",
  //13
  "8_conditionalRendering/App",
  //14
  "9_form/App",
  //15
  "10_state_list/App",
  //16
  "11_useRef/Component",
  //17
  "11_useRef/App",
  //18
  "12_style/App",
  //19
  "13.1_shared_state_example/App",
  //20
  "13.2_shared_state/App",
  //21
  "14.1_useReducer/App",
  //22
  "14.2_useReducer/App",
  //23
  "15_custom_hook/App",
  //24
  "16_router/Router",
  //25
  "16_router/ParamTest",
  //26
  "16_router/Router2",
  //27
  "17_context/Router",
  //28
  "18_context_router/Router",
  //29
  "19_json_server/Router",
  //30
  "20.1_axios/Router",
  //31
  "20.2_axios_wrong_fetch/ROuter",
  //32
  "21.1_useEffect_wrong_fetch/Router",
  //33
  "21.2_useEffect/Router",
];

const CURRENT_APP = 28; // Change this number to switch between different App components

// Dynamic import based on the current app number
const App = (await import(/* @vite-ignore */ `./${dirNames[CURRENT_APP]}`))
  .default;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    {/* 24 = 16_router/App */}
    {/* <Router /> */}
    {/* <ParamTest /> */}
  </StrictMode>
);
