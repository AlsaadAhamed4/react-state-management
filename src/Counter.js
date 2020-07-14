import React, { useState, useEffect } from 'react';

//if you are not using custom hooks that is useLocalStorage
// const getStateFromLocal = () => {
//   const storage = localStorage.getItem('counterState');
//   if (storage) return JSON.parse(storage).count;
//   return { count: 0 };
// }

// const setStateFromLocal = (count) => {
//   localStorage.setItem('count', JSON.stringify({ count }));
//   document.title = `count: ${count}`;
// }

const useLocalStorage = (initialState, key) => {
  const get = () => {
    const storage = localStorage.getItem(key);
    if (storage) {
      return JSON.parse(storage).value;
    }
    else {
      return initialState;
    }
  };
  const [value, setValue] = useState(get());

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify({ value }));
  }, [value]);

  return [value, setValue];
}


const Counter = ({ max, step }) => {
  const [count, setCount] = useLocalStorage(0, 'count');

  const increment = () => {
    setCount(count => {
      if (count >= max) return count;
      else return count + step;
    })
  }

  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  //if you are not using custom hooks that is useLocalStorage
  // useEffect(() => {
  //   setStateFromLocal(count);
  //   return () => {
  //     console.log('clean up');
  //   }
  // }, [count]); //array of dependecies

  return (
    <div className="Counter">
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