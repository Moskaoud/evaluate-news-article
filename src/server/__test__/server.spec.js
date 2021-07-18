import 'babel-polyfill'

import {getData} from '../index'

describe('Test getData functionality', () => {
    test('Testing the getData function defined or not', () => {
        expect(getData).not.toBeDefined(); // as no export in inddex.js
       })
    })

// describe('Server Test', () => {   
//     expect(app).toHaveProperty('post')
// })

