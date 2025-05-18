
import { useEffect, useState } from "react";
import { Graph as D3Graph } from "react-d3-graph";
import Graph from "./componentes/Graph";
import graphConfig from "./componentes/graphConfig";

function App() {
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });
  const [peopleInCity, setPeopleInCity] = useState([]);
  const [selectedCity, setSelectedCity] = useState("C1");

  useEffect(() => {
    const graph = new Graph();

    // Ciudades
    graph.addNode({ id: "C1", label: "New York", type: "city" });
    graph.addNode({ id: "C2", label: "Los Angeles", type: "city" });

    // Personas
    graph.addNode({ id: "P1", label: "Alice (25)", type: "person", age: 25, city: "C1" });
    graph.addNode({ id: "P2", label: "Bob (30)", type: "person", age: 30, city: "C2" });
    graph.addNode({ id: "P3", label: "Charlie (22)", type: "person", age: 22, city: "C1" }); // se crean cada uno de los nodos invocando a la clase Graph y a su metodo de añadir 
    // para las relaciones o conexiones entre nodos basta con llamar a la clase , su metodo y el id de cada nodo entre llaves y separado con , 


    // Relaciones persona-ciudad
    graph.addEdge({ id: "P1" }, { id: "C1" });
    graph.addEdge({ id: "P2" }, { id: "C2" });
    graph.addEdge({ id: "P3" }, { id: "C1" });

    // Amistades
    graph.addEdge({ id: "P1" }, { id: "P3" });

    // Datos para mostrar
    setGraphData(graph.toD3GraphFormat());
    setPeopleInCity(graph.getPeopleByCity(selectedCity));
  }, [selectedCity]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Grafo de Amigos y Ciudades</h2>

      <D3Graph id="graph-id" data={graphData} config={graphConfig} />

      <h3>Personas que viven en:</h3>
      <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
        <option value="C1">New York</option>
        <option value="C2">Los Angeles</option>
      </select>

      <ul>
        {peopleInCity.map((p) => (
          <li key={p.id}>{p.label}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
