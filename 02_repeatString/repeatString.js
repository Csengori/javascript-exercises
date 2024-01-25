const repeatString = function(string, numberOfTimes) {
    let outputString = ""
    if (numberOfTimes >= 0) {
        for (let i = 0; i < numberOfTimes; i++) {
            outputString += string
        }
        return outputString
    }else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = repeatString;
