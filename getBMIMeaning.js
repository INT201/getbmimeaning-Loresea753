const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  let result = weight/(height*height)
  return result
}
function getBMIMeaning(weight, height) {
  let srt
  calculateBMI(weight,height)
  if(calculateBMI()<18.5){
    return str = 'Underweight'
  }else if(calculateBMI()>=18.5&&result<25){
    return str = 'Noremal weight'
  }else if(calculateBMI()>=25.0){
    return str = 'Overweight'
  }
}
module.exports = getBMIMeaning
