
import { Nodo } from './nodo.js';

export const menuRaiz = new Nodo("Perfil", "/perfil");

const menuItems = [ // arreglo de menus desplegables 
  "Macquays",
  "Sectors", 
  "Account",
  "Profile",
  "Similarity & Privacy",
  "Password",
  "Notification",
  "Help",
  "FAQs",
  "Submit & Toilet",
  "Network Status",
  "Layout"
];

menuItems.forEach(item => {
  const nodo = new Nodo(item, `/${item.toLowerCase().replace(/ /g, '-')}`);
  menuRaiz.agregarHijo(nodo);
});