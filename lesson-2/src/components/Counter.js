import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 2);
  };

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => {setCount(updateCount);}}> click +2 </button>
      <button onClick={updateCount}> click +2 </button>
      <button onClick={() => {setCount(item => ++item);}}> click +2 </button>
    </div>
  );
}

export default Counter;
