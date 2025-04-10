import React, { useState } from 'react';
import { useCollection } from '../hooks/useCollection';

const Crud = () => {
  const [name, setName] = useState('');
  const [editingId, setEditingId] = useState(null); // se realizan las confing de la estructura de el documento 
  const { 
    documents: items, 
    addDocument, 
    updateDocument, 
    deleteDocument, 
    isPending, 
    error 
  } = useCollection('users');

  const handleSubmit = async (e) => { // funciones de cadena que se unen entre si para funcionar en el aplicativo 
    e.preventDefault();
    if (!name.trim()) return;

    if (editingId) {
      await updateDocument(editingId, { name });
    } else {
      await addDocument({ name });
    }

    setName('');
    setEditingId(null);
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Seguro que quieres eliminar este elemento?')) {
      await deleteDocument(id);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2>CRUD Firebase</h2>
      
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre"
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <button 
          type="submit" 
          disabled={isPending}
          style={{ padding: '8px 15px' }}
        >
          {editingId ? 'Actualizar' : 'Agregar'}
        </button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setName('');
              setEditingId(null);
            }}
            style={{ 
              padding: '8px 15px',
              marginLeft: '10px',
              backgroundColor: '#f44336',
              color: 'white'
            }}
          >
            Cancelar
          </button>
        )}
      </form>

      {error && <div style={{ color: 'red', margin: '10px 0' }}>{error}</div>}
      {isPending && <div style={{ margin: '10px 0' }}>Procesando...</div>}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map(item => (
          <li key={item.id} style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
            margin: '5px 0',
            border: '1px solid #ddd',
            borderRadius: '4px'
          }}>
            <span>{item.name}</span>
            <div>
              <button
                onClick={() => {
                  setName(item.name);
                  setEditingId(item.id);
                }}
                style={{ 
                  marginRight: '5px',
                  padding: '5px 10px',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px'
                }}
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                style={{ 
                  padding: '5px 10px',
                  backgroundColor: '#f44336',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px'
                }}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Crud;