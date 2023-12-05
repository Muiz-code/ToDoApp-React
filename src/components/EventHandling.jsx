import { useState } from "react";
import FirstComponent from "./FirstComponent";

const EventHandling = () => {
  const [x, setx] = useState(0);

  const btnClick = () => {
    console.log("click");
    setx(x + 1);
    console.log(x);
  };

  return (
    <div>
      <button
        onClick={() => {
          btnClick();
        }}
      >
        Click me
      </button>
      <FirstComponent data={x} fn={setx} />
    </div>
  );
};

export default EventHandling;
