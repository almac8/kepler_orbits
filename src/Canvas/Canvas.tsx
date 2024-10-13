import { useEffect, useRef } from "react";

import "./Canvas.css";
import { sceneData } from "../Engine/Data";

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect( initializeCanvas, [ canvasRef ]);
  window.addEventListener("resize", initializeCanvas);

  function initializeCanvas() {
    const canvas = canvasRef.current;

    if(canvas !== null) {
      resizeCanvas(canvas);
      sceneData.setRenderingContext(canvas.getContext("2d"));
    }
  }

  function resizeCanvas(canvas: HTMLCanvasElement) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  return(
    <canvas id="Canvas" ref={ canvasRef } />
  );
};

export default Canvas;