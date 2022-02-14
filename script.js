'use strict';

setTimeout(greeting, 3000);

function greeting() {
  document.getElementById('testing').textContent = 'Ready for a change';
}

console.log('Test');
