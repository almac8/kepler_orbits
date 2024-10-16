import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import PolarCoordinate from "./PolarCoordinate";

type SceneData = {
  renderingContext: CanvasRenderingContext2D | undefined,
  setRenderingContext: Dispatch<SetStateAction<CanvasRenderingContext2D | undefined>>,
  position: PolarCoordinate,
  setPosition: Dispatch<SetStateAction<PolarCoordinate>>,
  orbitSize: number,
  setOrbitSize: Dispatch<SetStateAction<number>>,
  orbitEccentricity: number,
  setOrbitEccentricity: Dispatch<SetStateAction<number>>,
  orbitalVelocity: number,
  setOrbitalVelocity: Dispatch<SetStateAction<number>>,
};

type SceneDataProviderProps = {
  children: ReactNode
};

let sceneData: SceneData = {
  renderingContext: undefined,
  setRenderingContext: () => {},
  position: new PolarCoordinate(),
  setPosition: () => {},
  orbitSize: 0,
  setOrbitSize: () => {},
  orbitEccentricity: 0,
  setOrbitEccentricity: () => {},
  orbitalVelocity: 0,
  setOrbitalVelocity: () => {}
};

const SceneDataContext = createContext(sceneData);

const SceneDataProvider = (props: SceneDataProviderProps) => {
  const [ renderingContext, setRenderingContext ] = useState<CanvasRenderingContext2D | undefined>(undefined);
  const [ position, setPosition ] = useState<PolarCoordinate>(new PolarCoordinate());
  const [ orbitSize, setOrbitSize ] = useState<number>(0);
  const [ orbitEccentricity, setOrbitEccentricity ] = useState<number>(0);
  const [ orbitalVelocity, setOrbitalVelocity ] = useState<number>(0);

  sceneData.renderingContext = renderingContext;
  sceneData.setRenderingContext = setRenderingContext;
  sceneData.orbitSize = orbitSize;
  sceneData.setOrbitSize = setOrbitSize;
  sceneData.orbitEccentricity = orbitEccentricity;
  sceneData.setOrbitEccentricity = setOrbitEccentricity;
  sceneData.orbitalVelocity = orbitalVelocity;
  sceneData.setOrbitalVelocity = setOrbitalVelocity;
  
  return (
    <SceneDataContext.Provider value={{ renderingContext, setRenderingContext, position, setPosition, orbitSize, setOrbitSize, orbitEccentricity, setOrbitEccentricity, orbitalVelocity, setOrbitalVelocity }}>
      { props.children }
    </SceneDataContext.Provider>
  );
};

export { sceneData, SceneDataContext, SceneDataProvider }