// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.
//
// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.
//function remove (array, removeIt) {
    //indexPosition = "null"
   // let indexPosition = array.indexOf(removeIt)
   // if (indexPosition !== "null") {
    //array.splice(indexPosition, 1)
   // }
    //return array
   // else {
   // return array
   //// }
//}
 function remove (array, itemToremove) {
     myPosition = '0' // set my current postion to the beginning of the array
     for (myPosition < array.length) {   //Is my current position less than the max?
         if array.value(myPosition) = itemToremove  //does my current value equal what i want to remove?
         array.splice(myPosition, 1)  //remove
         myPosition = myPosition +1  // change my current position to the next row after the remove
      else
         myposition = myPosition +1   //chage my posytion to the next row without removeing
     }
 }    




// 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.

// 3. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.
function sum (array, scores) {
  let sum = 0 
  for (let score of scores) {
      sum += score
}
}



// 4. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.
function average (passedarray) {
    myTotalsum = 0
    myCount = 0

    for (passesnum of passedarray) {
        myTotalsum += passednum
        myCount += 1
    }
    myAverage = myTotalsum / myCount 
    print myAverage
}


// 5. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.
function minimum(passedArray){    ///input an array and a minimumm vaue
    let localMinNum = null// sets minimum value to null originaly 

    for (let passednum of passedarray) { //estabblishes my loop
        if (localmyMinNum === null  || passednum < localmyMinNum) // in the loop, if minnum=0 or if the number the loop is < myMInNumber
            localmyMinNum = passednum    // set my new minum number
            
    }
    print localmyMinNum    //print the lowest number
}


// 6. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.

// 7. Create a function called `textList` that takes an array and joins its elements
// into a string separated by commas.
//
// For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// `"Cadence,Ordel,Marion"`.
function textlist (passedArray)
myNewstring = null

for (passedNames of passedArray) {
    if (myNewstring === null) {
        set myNewstring = passedNames
    } 
    else (myNewstring = myNewstring.concat(,passedNames))
}
print myNewstring