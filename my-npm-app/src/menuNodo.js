
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuNode = ({ nodo }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div style={{ marginLeft: '15px' }}>
      <div onClick={() => setIsExpanded(!isExpanded)}>
        {nodo.hijos.length > 0 && <span>{isExpanded ? '▼' : '▶'}</span>}
        <Link to={nodo.link}>{nodo.titulo}</Link>
      </div>
      {isExpanded && nodo.hijos.map((hijo, index) => (
        <MenuNode key={index} nodo={hijo} />
      ))}
    </div>
  );
};

export default MenuNode; 