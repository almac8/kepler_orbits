import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import Engine from "./Engine/Engine";
import { SceneDataProvider } from "./Engine/Data";
import Canvas from "./Canvas/Canvas";
import UI from "./UI/UI";

const engine = new Engine();
engine.start();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SceneDataProvider>
      <Canvas />
      <UI />
    </SceneDataProvider>
  </StrictMode>
);