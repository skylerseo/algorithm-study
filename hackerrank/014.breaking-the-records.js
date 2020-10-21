// - Function Description

// Complete the breakingRecords function in the editor below. It must return an integer array containing the numbers of times she broke her records. Index 0 is for breaking most points records, and index 1 is for breaking least points records.

// breakingRecords has the following parameter(s):

// scores: an array of integers

function breakingRecords(scores) {
  let games = scores ;
  let min = games[0];
  let max = games[0];
  
  let minRecord = 0;
  let maxRecord = 0;
  
  for (const score of games) {
    if (max < score) {
      max = score;
      maxRecord++;
    }
    else if (score < min) {
      min = score;
      minRecord++;
    }
  }
  
  return [maxRecord, minRecord];
}