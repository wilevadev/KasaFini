// Import des bibliothèques React et ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
// Import du composant App
import App from './App';

// Création d'une racine pour le rendu de l'application à l'aide de ReactDOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu de l'application en mode strict
root.render(
  <React.StrictMode>
   <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

