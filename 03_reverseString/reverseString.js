
// const reverseString = function(string) {
//     let outputString = ""
//     for(let i = string.length-1; i >= 0; i--){
//         outputString += string[i]
//     }
//     return outputString
// };


const reverseString = function(string) {
    return string.split("").reverse().join("")
};

// Do not edit below this line
module.exports = reverseString;
