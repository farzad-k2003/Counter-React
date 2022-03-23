import Button from "../Button";
import { useState } from "react";
// import { useEffect } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState();

  function incBtn() {
    if (count === limit) {
      return;
    } else {
      setCount(count + 1);
    }
  }
  function decBtn() {
    if (count === -limit) {
      return;
    } else {
      setCount(count - 1);
    }
  }
  function setColor() {
    if (count > 0) {
      return "green";
    } else if (count < 0) {
      return "red";
    } else if (count === 0) {
      return "black";
    }
  }
  function changeHandler(value) {
    setCount(0);
    setLimit(+value);
  }

  return (
    <div id="main">
      <div className="input-container">
        <input
          placeholder="Set limit: "
          type="number"
          id="input"
          onChange={(event) => changeHandler(event.target.value)}
        />
      </div>
      <div className="counter">
        <Button value="Decrease" className="dec-btn" onClick={decBtn} />
        <div className="count" id="count" style={{ color: setColor() }}>
          {count}
        </div>
        <Button value="Increase" className="inc-btn" onClick={incBtn} />
      </div>
    </div>
  );
}

export default Counter;
