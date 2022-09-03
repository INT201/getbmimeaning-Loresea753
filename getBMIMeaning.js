const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  let result = weight/(height*height)
  return result
}
function getBMIMeaning(weight, height) {
  let str
  let result = calculateBMI(weight,height)
  if(result <18.5){
    return str = 'Underweight'
  }else if(result>=18.5&&result<25){
    return str = 'Normal weight'
  }else if(result>=25.0){
    return str = 'Overweight'
  }
}

// console.log(getBMIMeaning(70, 1.7))
module.exports = getBMIMeaning
แปปอ่อ
กุเหวอเอง