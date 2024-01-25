const add = function($0, $1) {
  return $0+$1
};

const subtract = function($0, $1) {
  return $0-$1
};

const sum = function($0, $1) {
  let result = $0
  for(let i = $0; $0 <= $1; i++){
    result++
  }
};

const multiply = function($0, $1) {
  return $0 * $1
};

const power = function($0, $1) {
  return Math.pow($0, $1)
};

const factorial = function($0, $1) {
  let result = $1
  for(let i = $1; $0 > $1; i--){
    result += result * i
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
