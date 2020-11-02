//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  
  let rna = ""
  for(let i = 0; i < dna.length; i++) {
    let char = dna[i]
  if (char === "C") {
    rna += ("G")
  } else if (char === "G") {
    rna += ("C")
  } else if (char === "T") {
    rna += ("A")
  } else if (char === "A") {
    rna += ("U")
  } else {
    rna += ""
  }
  }
  return rna
}

// This is an optional incomplete solution using a switch statement
/*
export const toRna = (dna) => {
  
    let rna = []
    switch (dna.push(rna)){
      case "C":
        rna = "G"
        break 
      case "G":
        rna = "C"
        break 
      case "T":
        rna = "A"
        break 
      case "A":
        rna = "U"
        break
      default: 
        rna = ""
    }
  return rna

};
*/