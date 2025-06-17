import { expect, test } from 'vitest'
import getJokes from '../get_data/getJokes'
import { jokeUrl1 } from '../utilities/urls'

test('Testing getJokes function: ', async () => {
    let result = await getJokes(jokeUrl1)

    expect(typeof getJokes).toBe('function')
    expect(typeof result).toBe('string')
})