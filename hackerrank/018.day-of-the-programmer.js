/*- Function Description

Complete the dayOfProgrammer function in the editor below. It should return a string representing the date of the 256th day of the year given.

dayOfProgrammer has the following parameter(s):

year: an integer*/

function dayOfProgrammer(year) {
  let isLeefYeer = (year % 4 === 0)
    ? ((year % 100 === 0) ? ((year < 1918 || (year % 400 === 0)) ? true : false) : true)
    : false;

  return `${year === 1918 ? 26 : (isLeefYeer ? 12 : 13)}.09.${year}`;
}