/*  A collection of problem solving patters witch are optimised

Count stuff in strings or arrays etc. and check if there is the same amount of things in another one.
Frequency Counter: with O(n) time complexity
Example checks if there are the same amount of letters only lowercase letters count everything else is ignored */

function frequencyCounter(str1, str2) {

    const letters = {};

    for(let char of str1) {
        char = char.toLowerCase();
        //check if cha is a lowercase letter
        if(/[a-z]/.test(char))
            //if the letter is in the letters object increment its count by 1 else set it to 1
            letters[char] = ++letters[char] || 1;
    }

    for(let char of str2) {
        char = char.toLowerCase();
        if(/[a-z]/.test(char)) {
            //check if letter exists in letters object if so decrement it by one else set its count to -1
            letters[char] ? --letters[char] : letters[char] = -1;
            // if all letters of the first string are "consumed" delete it from the object
            if(letters[char] === 0) delete letters[char];
        }
    }

    //if all letters match return true else return the mismatched letters
    // letter count in letters object is positive if the first string has more letters then the second and vice versa
    return Object.keys(letters).length === 0 || letters;

}

console.log(frequencyCounter('Hello ... World!!!', 'helloworld!'));