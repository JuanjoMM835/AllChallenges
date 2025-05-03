
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { menuRaiz } from './menu.js';
import { Sidebar } from './sidebar.js';

const Page = ({ title }) => <h1 style={{ padding: '20px' }}>{title}</h1>;
 // utilizamos el router link para manejar el componente y asociar pues las funciones 
function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar menuData={menuRaiz} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Page title="Inicio" />} />
            {menuRaiz.hijos.map((item, index) => (
              <Route
                key={index}
                path={item.link}
                element={<Page title={item.titulo} />}
              />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;