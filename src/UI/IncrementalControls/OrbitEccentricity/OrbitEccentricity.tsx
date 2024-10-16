import "./OrbitEccentricity.css";

type OrbitEccentricityProps = {
  orbitEccentricity: number,
  decrementOrbitEccentricity: Function,
  incrementOrbitEccentricity: Function
};

const OrbitEccentricity = (props: OrbitEccentricityProps) => (
  <div id="OrbitEccentricity" className="incrementalControl">
    <button className="leftButton" onClick={ () => props.decrementOrbitEccentricity(0.1) }>-0.1</button>
    <p>{ props.orbitEccentricity }</p>
    <button className="rightButton" onClick={ () => props.incrementOrbitEccentricity(0.1) }>+0.1</button>
  </div>
)

export default OrbitEccentricity;