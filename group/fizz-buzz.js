'use strict'

/*
 * Create function `fizzBuzz` that print numbers from 1 to 100
 * But for multiples of three, print "Fizz” instead of the number
 * and for the multiples of five, print "Buzz".
 * For numbers which are multiples of both three and five, print "FizzBuzz".
 *
 * use console.log to print
 *
 * Français:
 * Créer la fonction `FizzBuzz` qui affiche les nombres de 1 à 100
 * Mais pour les multiples de trois, affiche "Fizz" à la place du nombre
 * et pour les multiples de cinq, affiche "Buzz".
 * Pour les nombres qui sont des multiples de trois et de cinq, affiche "FizzBuzz".
 *
 * Utilisez console.log pour afficher.
 */
const fizzBuzz = a => {
  let b = 1

  while (b <= 100) {
    if (b % 3 == 0) {
      console.log('fizz')
    } else if (b % 5 == 0) {
      console.log('buzz')
    }
    if ((b % 3 == 0) & (b % 5 == 0)) {
      console.log('fizzbuzz')
    }
    console.log(b)
    b++
  }
}

// You must write your own tests
const assert = require('assert')

assert.strictEqual(typeof fizzBuzz, 'function')
assert.strictEqual(fizzBuzz.length, 1)
assert.deepStrictEqual(fizzBuzz())
assert.deepStrictEqual(fizzBuzz())
assert.deepStrictEqual(fizzBuzz())
