import minimist from 'minimist';
import { coinFlips } from "./modules/coin.mjs";
import { countFlips } from './modules/coin.mjs';
import { coinFlip } from './modules/coin.mjs';
const args = minimist(process.argv);
if (!args['number']) {
    let flip = coinFlip();
    if (flip == 'heads') {
        console.log({heads: 1});
    }
    else {
        console.log({tails: 1});
    }
}
else {
    let out = coinFlips(args['number']);
    console.log(out)
    console.log(countFlips(out));
}
