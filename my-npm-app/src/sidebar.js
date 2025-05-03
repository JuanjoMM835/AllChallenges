// src/sidebar.js
import React from 'react';
import MenuNode from './menuNodo.js';
import './sidebar.css';

export const Sidebar = ({ menuData }) => {
  return (
    <nav className="sidebar">
      <h2 className="sidebar-title">Menú Principal</h2>
      <div className="menu-container">
        <MenuNode nodo={menuData} />
      </div>
    </nav>
  );
};