function findShortestString(arr) {
  // type your code here
  if (arr.length === 1) {
    return arr[0];
  } else {
    const strLengths = [];
    for (let word of arr) {
      strLengths.push(word.length);
    }
    let shortest = strLengths[0];
    let indexOfShortest;
    for (i = 0; i < strLengths.length; i++) {
      if (strLengths[i] < shortest) {
        shortest = strLengths[i];
        indexOfShortest = i;
      }
    }
    return arr[indexOfShortest];
  }
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(["aaa", "a", "bb", "ccc"]));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(["cat", "hi", "dog", "an"]));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log(
    "=>",
    findShortestString(["flower", "juniper", "lily", "dadelion"])
  );

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution

//Explanation:
//if array has a length of 1/or has only one element, return that element. otherwise, look for the shortest one. create an empty array to store the lengths of each element of the arr argument by for looping and pushing into the empty array. then, for loop over the array containeing the lengths of each element. declare a variable that will store the length of the first element. and declare another variable to store the index of the current shortest variable in the for loop. the logic of the for loop will be: if the length of the current element in the for loop is less than variable shortest, assign that new value to shortest, and store its index in the indexofShortest variable. return the element with the shortest length using arr[indexOfShortest]