import "./OrbitSize.css";

type OrbitSizeProps = {
  orbitSize: number,
  incrementOrbitSize: Function,
  decrementOrbitSize: Function
};

const OrbitSize = (props: OrbitSizeProps) => (
  <div id="OrbitSize" className="incrementalControl">
    <button className="leftButton" onClick={() => props.decrementOrbitSize(10)}>-10</button>
      <p>{ props.orbitSize }</p>
    <button className="rightButton" onClick={() => props.incrementOrbitSize(10)}>+10</button>
  </div>
);

export default OrbitSize;