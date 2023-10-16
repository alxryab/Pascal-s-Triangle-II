const getRow = function(rowIndex) {

    if(rowIndex < 0){
        throw new Error(`expected positive row index, but got: ${rowIndex}`)
    }

    if(rowIndex == 0){
        return [1]
    }

    if(rowIndex == 1){
        return [1,1]
    }

    const prevRow = getRow(rowIndex - 1)
    const nextRow = [1]
    for (let i = 1; i <  prevRow.length; i++) {
        const prevValue = prevRow[ i - 1 ]
        const value = prevRow[i]
        nextRow.push(prevValue + value)
    }
    nextRow.push(1)
    
    return nextRow

};



module.exports = {getRow}