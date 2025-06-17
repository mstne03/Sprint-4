import { expect, test } from 'vitest'
import getDate from '../get_data/getDate'

test('Testing getData function: ', () => {
    let result = getDate()

    expect(typeof getDate).toBe('function')
    expect(typeof result).toBe('string')
})