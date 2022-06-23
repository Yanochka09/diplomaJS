const counterElements = document.querySelectorAll('.counter');

counterElements.forEach(elem => {
  const counter = new calCounter(elem);
  counter.init();
});

import calCounter from './modul/calCounter.js';

