import {beforeEach, expect, test} from 'vitest'
import {mult, splitIntoWords, sum} from "./01.ts";


let a: number
let b: number
let c: number

beforeEach( () => {
    a = 1
    b = 2
    c = 3
})

test('sum should be correct', () => {
    // action
    const result1 = sum(a, b)
    const result2 = sum(b, c)

   // expect result
    expect(result1).toBe(3)
    expect(result2).toBe(5)

})

test('multiply should be correct', () => {
    // action
    const result1 = mult(a, b)
    const result2 = mult(b, c)

    // expect result
    expect(result1).toBe(2)
    expect(result2).toBe(6)

})

test('splitting into words should be correct', () => {
    // data
    const sententence1 = 'Hello my friends!'
    const sententence2 = 'JS is a programming language.'

    // action
    const result1 = splitIntoWords(sententence1)
    const result2 = splitIntoWords(sententence2)

    // expect result
    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friends')

    expect(result2.length).toBe(5)
    expect(result2[0]).toBe('js')
    expect(result2[1]).toBe('is')
    expect(result2[2]).toBe('a')
    expect(result2[3]).toBe('programming')
    expect(result2[4]).toBe('language')

})