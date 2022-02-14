import minimist from 'minimist';
import { flipACoin } from './modules/coin.mjs';
const args = minimist(process.argv);
console.log(flipACoin(args['call']));