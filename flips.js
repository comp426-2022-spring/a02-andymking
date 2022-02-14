import minimist from 'minimist';
import { coinFlips } from "./modules/coin.mjs";
const args = minimist(process.argv);
console.log(coinFlips(args['number']))