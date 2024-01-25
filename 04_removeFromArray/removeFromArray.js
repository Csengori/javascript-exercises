const removeFromArray = function(array, ...element) {
    let output = []
    array.forEach(item => {
        if(!element.includes(item)) {
            output.push(item)
        }
    })
    return output
};

// Do not edit below this line
module.exports = removeFromArray;


//console.log(removeFromArray([1,2,3,4],3))