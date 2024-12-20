import './style.css';
import {App} from './App.js';
import {addHoverEffect} from "./mainDisplay/basicEffects.js";


document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.initialize();
  addHoverEffect();
});
