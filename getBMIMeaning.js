const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  let result = weight/(height*height)
  return result
}
function getBMIMeaning(weight, height) {
  let str
  calculateBMI(weight,height)
  if(calculateBMI(weight,height)<18.5){
    return str = 'Underweight'
  }else if(calculateBMI(weight,height)>=18.5&&weight,calculateBMI(weight,height)<25){
    return str = 'Normal weight'
  }else if(calculateBMI(weight,height)>=25.0){
    return str = 'Overweight'
  }
}

console.log(getBMIMeaning(70, 1.7))
module.exports = getBMIMeaning
