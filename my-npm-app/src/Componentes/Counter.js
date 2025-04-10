import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementBy } from '../counter/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value); // este es el estado del contado que pone el usuario 
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return ( // botones de incremento , decremento y hacer esto pero con el valor que el usuario quiera 
    <div>
      <h2>Counter</h2>
      <div>
        <button onClick={() => dispatch(increment())}>Incremento</button> 
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>Decremento</button>
      </div>
      <div>
        <input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          onClick={() => dispatch(incrementBy(Number(incrementAmount) || 0))}
        >
          Incrementa tu  valor 
        </button>
      </div>
    </div>
  );
};

export default Counter;