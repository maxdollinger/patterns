/*  A collection of problem solving patters witch are optimised

Count stuff in strings or arrays etc. and check if there is the same amount of things in another one.
Frequency Counter: with O(n) time complexity
Example checks if there are the same amount of letters only lowercase letters count everything else is ignored */

function frequencyCounter( str1, str2 ) {

    const letters = {};

    for( let char of str1 ) {
        char = char.toLowerCase();
        //check if cha is a lowercase letter
        if( /[a-z]/.test(char) )
            //if the letter is in the letters object increment its count by 1 else set it to 1
            letters[char] = ++letters[char] || 1;
    }

    for( let char of str2 ) {
        char = char.toLowerCase();
        if( /[a-z]/.test(char) ) {
            //check if letter exists in letters object if so decrement it by one else set its count to -1
            letters[char] ? --letters[char] : letters[char] = -1;
            // if all letters of the first string are "consumed" delete it from the object
            if( letters[char] === 0 ) delete letters[char];
        }
    }

    //if all letters match return true else return the mismatched letters
    // letter count in letters object is positive if the first string has more letters then the second and vice versa
    return Object.keys(letters).length === 0 || letters;
}

// multiple pointers
// return the first pair  of an sorted array which add up to zero with O(n) time complexity

function addToZero( arr ) {
    //start at beginning of array and count up
    let leftPointer = 0;
    //start at end of array and count down
    let rightPointer = arr.length-1;

    while( leftPointer < rightPointer ) {

        let sum = arr[leftPointer] + arr[rightPointer];

        if( sum === 0 ) {
            return [arr[leftPointer], arr[rightPointer]];
        } else if( sum > 0 ) {
            //if sum is greater then 0 the number to the right is bigger so count on down
            rightPointer--;
        } else {
            //if the sum is less then 0 the number on the left side is smaller so count upwards
            leftPointer++;
        }
    }
}

//Getting the number of unique values of an array again in O(n) time complexity
//Using the built in Set
function countUniqueValues( arr ) {
    return (new Set(arr)).size;
}

// "Divide an Conquer" pattern with a simple binary search in an sorted array O(log(n))
function search( arr, val ) {
    //set start and end of array
    let min = 0;
    let max = arr.length -1;

    while( min <= max ) {
        //calc the middle index of the array
        let middle = Math.floor((min + max) / 2);
        let middleElement = arr[middle];

        //check if the middle element is equal to the search value
        if( middleElement === val ) return middleElement;

        //if the search value is bigger then the middleElement continue with second half else the first half
        val > middleElement ? min = middle+1 : max = middle-1;
    }

    //if the value was not found return -1
    return -1;
}




