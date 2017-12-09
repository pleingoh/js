'use strict'

/*
 * Price is right
 * 1 can of soup is 650 FCFA
 * 3 can of soup is 1500 FCFA
 * 1 can of soup contains 500 ml
 *
 * Create a function `getCostCount` that takes a number of cans
 * and return the cost (and applying the 3 for 1500 FCFA discount)
 *
 * Create a function `getCostMl` that takes a quantity in milliliters
 * and return the cost (and applying the 3 for 1500 FCFA discount)
 */
const cost = 650
const ml = 500
const n = 1

const getCostCount = a => {
  const cost = 650

  if (n == 1) {
    console.log('vous nous devez:', cost, 'cfa')
    console.log('vous avez pris:', ml, 'ml')
  }
}

// You must write your own tests
const assert = require('assert')

assert.strictEqual(typeof getCostCount, 'function')
assert.strictEqual(getCostCount.length, 1)
assert.deepStrictEqual(getCostCount())
