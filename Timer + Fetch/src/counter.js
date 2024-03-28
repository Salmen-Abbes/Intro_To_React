import React, { useState } from 'react';

const Counter = () => {
  // Define state variable 'count' and a function 'setCount' to update it
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Display the current count */}
      <h2>Counter: {count}</h2>

      {/* Button to increment the count */}
      <button onClick={() => setCount(count + 1)}>Increment</button>

      {/* Button to decrement the count */}
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
