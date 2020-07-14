import React, { useRef, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const countRef = useRef();
  let message = '';
  if (countRef.current < count) message = 'higher';
  if (countRef.current > count) message = 'lower';

  countRef.current = count;

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="Counter">
      {
        count === 0 ? null : <p>{message}</p>
      }
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </div>
  );
}

export default Counter;