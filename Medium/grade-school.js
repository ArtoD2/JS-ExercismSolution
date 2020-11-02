//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this.grades = {};                                   // initialize object
  }
  roster() {
    return JSON.parse(JSON.stringify(this.grades));     // convert grades into a JSON string
  }

  add(students, grade) {
    this.grades[grade] = (this.grades[grade] || []).concat(students).sort(); // join arrays together and sorts
  }

  grade(grade) {
    return [...(this.grades[grade] || [])];         // matches the year to the grade
  }
}
