import { useContext } from "react";
import "./UI.css";
import { SceneDataContext } from "../Engine/Data";
import OrbitSize from "./IncrementalControls/OrbitSize/OrbitSize";
import OrbitEccentricity from "./IncrementalControls/OrbitEccentricity/OrbitEccentricity";
import OrbitalVelocity from "./IncrementalControls/OrbitalVelocity/OrbitalVelocity";

const UI = () => {
  const sceneDataContext = useContext(SceneDataContext);

  const incrementOrbitSize = (amount: number) => {
    sceneDataContext.setOrbitSize(sceneDataContext.orbitSize + amount);
  };

  const decrementOrbitSize = (amount: number) => {
    sceneDataContext.setOrbitSize(sceneDataContext.orbitSize - amount);
  };

  const incrementOrbitEccentricity = (amount: number) => {
    sceneDataContext.setOrbitEccentricity(sceneDataContext.orbitEccentricity + amount);
  };
  
  const decrementOrbitEccentricity = (amount: number) => {
    sceneDataContext.setOrbitEccentricity(sceneDataContext.orbitEccentricity - amount);
  };

  const incrementOrbitalVelocity = (amount: number) => {
    sceneDataContext.setOrbitalVelocity(sceneDataContext.orbitalVelocity + amount);
  };
  
  const decrementOrbitalVelocity = (amount: number) => {
    sceneDataContext.setOrbitalVelocity(sceneDataContext.orbitalVelocity - amount);
  };

  return (
    <div id="UI">
      <OrbitSize
      orbitSize={ sceneDataContext.orbitSize }
      incrementOrbitSize={ incrementOrbitSize }
      decrementOrbitSize={ decrementOrbitSize } />

      <OrbitEccentricity
      orbitEccentricity={ sceneDataContext.orbitEccentricity }
      incrementOrbitEccentricity={ incrementOrbitEccentricity }
      decrementOrbitEccentricity={ decrementOrbitEccentricity } />

      <OrbitalVelocity
      orbitalVelocity={ sceneDataContext.orbitalVelocity }
      incrementOrbitalVelocity={ incrementOrbitalVelocity }
      decrementOrbitalVelocity={ decrementOrbitalVelocity }
      />
    </div>
  );
};

export default UI;