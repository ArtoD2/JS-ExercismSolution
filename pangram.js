//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
   
  let alph = "abcdefghijklmnopqrstuvwxyz"
  let cnt = 0
  let sentencelc = sentence.toLowerCase()
  let rtnVal = false
  for (let char of alph) {
    for (let tchar of sentencelc) {
      if (char === tchar) {
        cnt++
        break
      }
    }
  }
  if (cnt ===  alph.length){
    rtnVal = true
  }
  return rtnVal
}


