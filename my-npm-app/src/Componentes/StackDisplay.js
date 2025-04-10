import React from 'react';
import { useSelector } from 'react-redux';

const StackDisplay = () => {
  const items = useSelector((state) => state.stack.items); // stacks 

  return (
    <div>
      <h3>Stack Contents:</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>Total items: {items.length}</p>
    </div>
  );
};

export default StackDisplay;