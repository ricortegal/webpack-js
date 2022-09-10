import _ from '../node_modules/loadsh'
import './style.css'
import { printMe } from './print';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!2';
    btn.onclick = printMe;
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    element.appendChild(btn);
  
    return element;
  }
  
  document.body.appendChild(component());