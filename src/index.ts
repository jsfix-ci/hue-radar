#!/usr/bin/env ts-node-script
import getColors from './components/getColors';

const sampleText = `
a {
  color: '#fff';
}

section: {
  background: rgba(0, 0, 0, 0.75555);
  color: rgb(123, 250, 250);
  border: #000 #fff #222 #f1f1f1;
}

p {
  color: lime;
}

`;


console.log(
  getColors(sampleText)
);
