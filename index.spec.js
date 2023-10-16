"use strict" 

const {strict} = require("assert") 

const {getRow} = require("./index") 

// todo: check invalid args
describe('pascals triangle test', ()=>{
    it('0 - row',()=>{
        mustBeRow(0, [1])
    })

    it('1 - row',()=>{
        mustBeRow(1, [1,1])
    })

    it('2 - row',()=>{
        mustBeRow(2, [1,2,1])
    })

    it('4 - row',()=>{
        mustBeRow(4, [1,4,6,4,1])
    })

    it('9 - row',()=>{
        mustBeRow(9, [1, 9, 36, 84, 126, 126, 84, 36, 9, 1])
    })
    
    it('reject negative row index',()=>{
        strict.throws(()=>{
            getRow(-1)
        }, /expected positive row index, but got: -1/ )
    })
    
    function mustBeRow(rowIndex, expectedRow){
        const actual = getRow(rowIndex)
        strict.deepEqual(actual, expectedRow)
    }
})