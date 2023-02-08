var stringArray = ["Alpha", "Beta", "Gamma", "Delta"]
var numArray = [1, 2, 3, 4]
var boolArray = [true, false, true, false]


// This will log the string array and slice it starting with the
// second position and ending, but not including, the fourth position.
// Expected output is: ["Beta", "Gamma"]
    console.log(stringArray.slice(1, 3))


// This will log the numArray without the final position.
// It 'pops' the final piece of the array out of the array.
// Expected output is: [4]
    console.log(numArray.pop())

// Similar to 'pop', this will pull the first position of the array
// and log it. Expected output is [true]
    console.log(boolArray.shift())



