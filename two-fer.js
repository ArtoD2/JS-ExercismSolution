//
// This is only a SKELETON file for the 'Two fer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const twoFer = (name) => {
  let rtnValue

  if (name === undefined) {
    rtnValue = "One for you, one for me."
  } else {
    rtnValue = `One for ${name}, one for me.`
  }
  return rtnValue

}
