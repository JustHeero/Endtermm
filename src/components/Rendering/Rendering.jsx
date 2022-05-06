import React, { useState } from "react";
import s from "./Rendering.module.css";
const Rendering = () => {
  const [isToggled, setIsToggled] = useState(true);
  return (
    <div className={s.content}>
      <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
      {isToggled ? <p>This value is true</p> : <p>This value is false</p>}
    </div>
  );
};

export default Rendering;
