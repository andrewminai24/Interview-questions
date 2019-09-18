let getItem = function(row,j){
    if(j < 0 || j == row.length){
        return 0;
    }
    return row[j];
}
/*
@param
@return
*/
let getRow = function(rowIndex){
    let row = [1];
    for(let i=0;i < rowIndex;++i){
        let newRow = [];
        for(let j = 0; j <= i+1;++j){
            let digit = getItem(row,j-1) + getItem(row,j);
            newRow.push(digit);
        }
        row = newRow;
    }
    return row;
};
console.log(getRow(3));