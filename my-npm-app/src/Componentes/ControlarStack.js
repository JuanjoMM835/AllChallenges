import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clear, pop, push } from '../stack/stackSlice';

const StackControls = () => {
  const dispatch = useDispatch();
  const [newItem, setNewItem] = useState(''); // el controller del stack

  return (
    <div>
      <h2>Stack Controls</h2>
      <div>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter item"
        />
        <button onClick={() => {
          if (newItem.trim()) {
            dispatch(push(newItem));
            setNewItem('');
          }
        }}>
          Push
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(pop())}>Pop</button>
        <button onClick={() => dispatch(clear())}>Clear</button>
      </div>
    </div>
  );
};

export default StackControls;