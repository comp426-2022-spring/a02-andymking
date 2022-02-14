/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

export function coinFlip() {
  return Math.random() > 0.5 ? 'heads' : 'tails';
}

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */
export function coinFlips(flips) {
  let out = Array(flips).fill(null);
  let desc = {heads: 0, tails: 0};
  if (flips >= 1) {
    for (let i = 0; i < flips; i++) {
      let flip = coinFlip();
      flip == 'heads' ? desc.heads += 1 : desc.tails += 1;
      out[i] = flip;
    }
    return [out, desc];
  } else {
    let flip = coinFlip();
    out[0] = flip;
    flip == 'heads' ? desc.heads = 1 : desc.tails = 1;
    return [out, desc];
  }
}

/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

export function countFlips(array) {
  let desc = {heads: 0, tails: 0};
  for(let i = 0; i < array.length; i++) {
    array[i] == 'heads' ? desc.heads += 1 : desc.tails += 1;
  }
  return desc;
}

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

export function flipACoin(call) {
  if (call != 'heads' && call != 'tails') {
    return 'Error: no input.\nUsage: node guess-flip --call=[heads|tails]';
  } else {
    let flip = coinFlip();
    let result = flip == call ? 'win' : 'lose';
    return (`call: \'${call}\', flip: \'${flip}\', result: \'${result}\'`)
  }
}


/** Export 
 * 
 * Export all of your named functions
*/
