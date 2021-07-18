// import 'babel-polyfill'
import 'regenerator-runtime/runtime'
import { handleSubmit } from '../js/formHandler'
// const updateUI = require('../js/formHandler')

describe('Client Test',  () => {
 it('A',()=>{
         expect(handleSubmit).toBeDefined();

 })

})

// import {checkURL} from '../js/checkURL'

// describe('Test check url functionality', () => {
//     test('Testing the checkUrl function defined or not', () => {
//         expect(checkURL).toBeDefined();    })
//     })