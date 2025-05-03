import React from 'react';
import { Tree } from 'react-d3-tree';

export const BinaryTree = ({ arbol }) => {
  const convertirAD3 = (nodo) => {
    if (!nodo) return null;
    
    const nodeStructure = {
      name: nodo.valor.toString(),
      attributes: { value: nodo.valor.toString() }, // Campo requerido
      children: []
    };

    if (nodo.izquierda) {
      nodeStructure.children.push(convertirAD3(nodo.izquierda));
    }
    if (nodo.derecha) {
      nodeStructure.children.push(convertirAD3(nodo.derecha));
    }

    if (nodeStructure.children.length === 0) {
      delete nodeStructure.children;
    }

    return nodeStructure;
  };

  return (
    <div style={{ width: '100%', height: '500px', border: '1px solid #ccc' }}>
      {arbol.raiz ? (
        <Tree
          data={convertirAD3(arbol.raiz)}
          orientation="vertical"
          translate={{ x: 250, y: 50 }}
          pathFunc="step"
        />
      ) : (
        <div style={{ padding: 20 }}>Inserta valores para ver el árbol</div>
      )}
    </div>
  );
};