import React, { useRef, useState, useEffect } from 'react';

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

  useEffect(() => {
    const id = setInterval(() => {
      console.log(`count is ${count}`);
    }, 3000);
    return () => {
      clearInterval(id);
    }
  }, [count])

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