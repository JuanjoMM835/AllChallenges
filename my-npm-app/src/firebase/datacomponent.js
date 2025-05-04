import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDataToFirebase, fetchFirebaseData } from './firebaseThunk';

// componente de los datos de firebase
function DataComponent() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.firebase);

  useEffect(() => {
    dispatch(fetchFirebaseData());
  }, [dispatch]);

  const handleAddData = async () => {
    const newData = { 
      name: "Dato Test", 
      value: Math.random(),
      timestamp: new Date().toISOString()
    };
    try {
      await dispatch(addDataToFirebase(newData)).unwrap();
    } catch (error) {
      console.error("Error al agregar dato:", error);
    }
  };

  return (
    <div>
      <h2>Datos en Firebase</h2>
      {loading && <p>Cargando...</p>}
      {!loading && data.map((item, index) => (
        <div key={index}>
          <p>{item.name}: {item.value}</p>
          <small>{new Date(item.timestamp).toLocaleString()}</small>
        </div>
      ))}
      <button onClick={handleAddData} disabled={loading}>
        Agregar Dato
      </button>
    </div>
  );
}

export default DataComponent;