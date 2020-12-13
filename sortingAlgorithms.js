//Pro: If data is nearly sorted only view swaps
//Con: On random data a lot iterations needed
function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    };

    for (let i = arr.length; i > 0; i--) {
        let noSwaps = true

        for (let j = 0; j < i; j++) {

            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noSwaps = false;
            }
        }

        if (noSwaps) break;
    }
    return arr;
}

//Pro: - (easy to understand)
//Con: slow in every scenario
function selectionSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    };

    for (let i = 0; i < arr.length; i++) {
        let min = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j;
        }

        if (min !== i) swap(arr, i, min);
    }

    return arr;
}

//Pro: if arr is nearly sorted or when sorting on streams
//Con: slow if arr is reversed or data is random
function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {

        let number = arr[i];

        for ( let j = i - 1; j >= 0 && arr[j] > number; j-- ) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
    }

    return arr;
}

//The 3 above are working well on small data sets

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let middle = Math.floor(arr.length / 2);
    return merge(mergeSort(arr.slice(0,middle)), mergeSort(arr.slice(middle)));
}

function merge(arr1, arr2) {
    let newArr = [];
    let one = 0;
    let two = 0;

    while (one < arr1.length && two < arr2.length) {
        if (arr1[one] < arr2[two]) {
            newArr.push(arr1[one]);
            one++;
        } else {
            newArr.push(arr2[two]);
            two++;
        }
    }

    if (one < arr1.length) {
        newArr = newArr.concat(arr1.slice(one));
    }
    if (two < arr2.length) {
        newArr = newArr.concat(arr2.slice(two));
    }

    return newArr;
}




