import './style.css';
import {App} from './App.js';
import {addHoverEffect} from "./mainDisplay/basicEffects.js";
import {Loader} from "./loader.js";


document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  const loaderShown = sessionStorage.getItem('loaderShown');

  if (!loaderShown) {
    const appLoader = new Loader(document.querySelector('#app') || document.body);
    appLoader.start();
    // sessionStorage.setItem('loaderShown', 'true');
  } else {
    app.initialize();
    addHoverEffect();
  }
});
