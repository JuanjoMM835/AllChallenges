import React, { useState } from 'react';
import './App.css';
import { Queue } from './Queue';

function App() {
  // Creamos una instancia de Queue y la inicializamos con datos de prueba
  const [queue] = useState(() => {
    const q = new Queue();
    q.enqueue({ name: 'Juan Pérez', amount: 500 });
    q.enqueue({ name: 'María García', amount: 300 });
    q.enqueue({ name: 'Carlos López', amount: 700 }); // Ademas en el navegador se puede añadir una persona a la cola 
    // y tambien hacer la atencion para la siguiente persona por las funciones que tiene el   Queue
    return q;
  });

  const [people, setPeople] = useState([...queue.items]); // Estado para renderizar
  const [newPerson, setNewPerson] = useState({ name: '', amount: '' }); // Variables de estado con atributos, asi como lo haciamos con los arreglos 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPerson(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPerson.name && newPerson.amount) {
      queue.enqueue({
        name: newPerson.name,
        amount: parseFloat(newPerson.amount) // se hace la conversion de que el monto es un numero y no una cadena 
        // aunque estaba pensando si dejarlo como parseFloat o como entero parseInt.
      });
      setPeople([...queue.items]);
      setNewPerson({ name: '', amount: '' });
    }
  };

  const handleDequeue = () => {
    const nextPerson = queue.dequeue();
    if (nextPerson) {
      alert(`Atendiendo a: ${nextPerson.name} - Monto: $${nextPerson.amount}`); // se añade a la persona , con el respectivo monto 
      setPeople([...queue.items]);
    } else {
      alert('No hay personas en la cola');
    }
  };

  return (
    <div className="app">
      <h1>Cajero Automático - Cola de Personas</h1> 
      
      <div className="container">
        <div className="form-section">
          <h2>Añadir Persona a la Cola</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nombre:</label>
              <input
                type="text"
                name="name"
                value={newPerson.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Monto a Retirar:</label>
              <input
                type="number"
                name="amount"
                value={newPerson.amount}
                onChange={handleInputChange}
                required
                min="1"
              />
            </div>
            <button type="submit">Añadir a la Cola</button>
          </form>
          
          <button 
            onClick={handleDequeue} 
            className="dequeue-btn"
            disabled={queue.isEmpty()}
          >
            Atender Siguiente Persona
          </button>
        </div>
        
        <div className="queue-section">
          <h2>Cola Actual</h2>
          {queue.isEmpty() ? (
            <p>No hay personas en la cola</p>
          ) : (
            <ul className="queue-list">
              {people.map((person, index) => (
                <li key={index} className="queue-item">
                  <span className="person-name">{person.name}</span>
                  <span className="person-amount">${person.amount.toFixed(2)}</span>
                  {index === 0 && <span className="current-person">(En atención)</span>}
                </li>
              ))}
            </ul>
          )}
          <p>Total en cola: {queue.size()} personas</p>
        </div>
      </div>
    </div>
  );
}

export default App;
// Aclaro que el cajero no lo pude hacer asi todo automatico , pero si implemente las funciones de las diapos 
//digamos que es un cajero Semi- automatico jaja porque en este caso el probador (Yo ) tengo que hacer lo de agregar a una persona a la cola 
// y lo de la atencion a la siguiente persona.