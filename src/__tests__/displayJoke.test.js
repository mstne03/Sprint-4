import { expect, test } from 'vitest'
import displayJoke from '../logic/displayJoke'

test('Testing displayJoke module: ', async () => {
    let result = await displayJoke();

    expect(typeof displayJoke).toBe('function')
    expect(typeof result).toBe('string')
})