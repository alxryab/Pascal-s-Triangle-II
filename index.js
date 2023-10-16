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
    
    //A[n] = A[n-1] * (rowIndex - (n-1))/n
    let row = [1, rowIndex]

    for(let i = 2; i < Math.ceil((rowIndex + 1)/2); i++){
        row[i] = Math.round(row[i-1] * (rowIndex - (i-1))/i)
    }
    const rightPart = row.slice()
    if( rowIndex % 2 == 0){
        rightPart.pop()
    }
    rightPart.reverse()
    row.push(...rightPart)

    return row

};



module.exports = {getRow}