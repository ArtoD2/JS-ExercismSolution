//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (number) => {

  let speak = ""
    if (number % 3 === 0 && number % 5 === 0 && number % 7 === 0){
      speak += "PlingPlangPlong"
    } else if (number % 3 === 0 && number % 5 === 0){
      speak += "PlingPlang"
    } else if (number % 5 === 0 && number % 7 === 0){
      speak += "PlangPlong"
    } else if (number % 3 === 0 && number % 7 === 0){
      speak += "PlingPlong"
    } else if (number % 3 === 0) {
      speak += "Pling"
    } else if (number % 5 === 0) {
      speak += "Plang"
    } else if (number % 7 === 0) {
      speak += "Plong"
    } else {
      speak = number.toString()
    }
  return speak
}
