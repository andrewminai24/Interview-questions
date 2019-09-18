var getItem = function(row,j){
    if(j < 0 || j == row.length){
        return 0;
    }
    return row[j];
}
/*
@param
@return
*/
var getRow = function(rowIndex){
    var row = [1];
    for(var i=0;i < rowIndex;++i){
        var newRow = [];
        for(var j =0; j <= i+1;++j){
            var digit = getItem(row,j-1) + getItem(row,j);
            newRow.push(digit);
        }
        row = newRow;
    }
    return row;
};
console.log(getRow(3));