'use strict';

setTimeout(greeting, 1000);

function greeting() {
  document.getElementById('testing').innerHTML = 'Ready for a change';
}

console.log('Test');
