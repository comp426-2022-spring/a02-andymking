import minimist from 'minimist';
import { coinFlips } from "./modules/coin.mjs";
import { countFlips } from './modules/coin.mjs';
const args = minimist(process.argv);
let out = coinFlips(args['number']);
let test = {heads: 1};
console.log(test);
// console.log(out)
// console.log(countFlips(out));