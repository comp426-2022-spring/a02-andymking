import minimist from 'minimist';
import { coinFlips } from "./modules/coin.mjs";
import { countFlips } from './modules/coin.mjs';
const args = minimist(process.argv);
let out = coinFlips(args['number']);
console.log(out, countFlips(out));