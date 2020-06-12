/* eslint-disable no-console */
/* eslint-disable no-debugger */

import './index.css';

// numeral formats numbers
import numeral from 'numeral';

const costValue =  numeral(1000).format('$0,0.0');
debugger;
console.log(`I would pay ${costValue} for this particular course`);

console.log('rear exception disable ESLint'); // eslint-disable-line no-console

