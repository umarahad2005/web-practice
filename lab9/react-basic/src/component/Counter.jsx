import { useState } from "react"; 


function Counter() { 

  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: 'left', marginTop: '20px' }}>
      <h2>Count: {count}</h2>

      <button onClick={handleIncrease} style={{ marginRight: '10px' }}>
        Increase
      </button>
      
      <button onClick={handleDecrease} style={{ marginLeft: '10px' }}>
        Decrease
      </button>
    </div>
  );
}

export default Counter;