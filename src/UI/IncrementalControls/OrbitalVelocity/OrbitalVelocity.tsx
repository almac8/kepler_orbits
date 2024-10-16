import "./OrbitalVelocity.css";

type OrbitalVelocityProps = {
  orbitalVelocity: number,
  decrementOrbitalVelocity: Function,
  incrementOrbitalVelocity: Function
};

const OrbitalVelocity = (props: OrbitalVelocityProps) => (
  <div id="OrbitalVelocity" className="incrementalControl">
    <button className="leftButton" onClick={ () => props.decrementOrbitalVelocity(0.001) }>-0.001</button>
    <p>{ props.orbitalVelocity }</p>
    <button className="rightButton" onClick={ () => props.incrementOrbitalVelocity(0.001) }>+0.001</button>
  </div>
);

export default OrbitalVelocity;