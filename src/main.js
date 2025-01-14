import {App} from './App.js';
import {addHoverEffect} from "./mainDisplay/basicEffects.js";
import {Loader} from "./loader.js";


document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  const loaderShown = sessionStorage.getItem('loaderShown');
    app.initialize();
    addHoverEffect();
  }
);
