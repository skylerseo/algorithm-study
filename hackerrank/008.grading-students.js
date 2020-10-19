// - Function Description
// Complete the function gradingStudents in the editor below.
// gradingStudents has the following parameter(s):
// int grades[n]: the grades before rounding

// - Returns
// int[n]: the grades after rounding as appropriate

function gradingStudents(grades) {
  let output = [];

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38) {
      let reminder = grades[i] % 5;
        if (reminder === 3) {
          output.push(grades[i] + 2)
        } else if (reminder === 4) {
          output.push(grades[i] + 1)
        } else {
          output.push(grades[i]);
        }

    } else {
      output.push(grades[i]);
    }
  }

  return output;
}