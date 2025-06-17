import { expect, test } from 'vitest'
import addJoke from '../logic/addJoke'

test('Testing addJoke function:', async () => {

    expect(typeof addJoke).toBe('function');
});