/////////////
// Task 1
/////////////
// console.log([1,23,4,5,435,345,-4, -45]);
/////////////
///////////// 

function getMinMax(arr) {
    if (arr.length == 1)
        return arr[0];

    let max = arr[0];
    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        } else if (arr[i] < min) {
            min = arr[i];
        }
    }
    return [max, min]
}


/////////////
// Task 2
/////////////
// let f1 = redundant('erzrum');
// console.log(f1());
/////////////
///////////// 

function redundant(str) {
    return () => str;
}


/////////////
// Task 3
/////////////
// console.log( matchHouses(4) );
/////////////
///////////// 

function matchHouses(n) {
    return (n-1) * 5 + 6;
}


/////////////
// Task 4
/////////////
// console.log( countTrue([false, true, false, false, true]) ); 
/////////////
///////////// 

function countTrue(arr) {
    return arr.filter( v => v ).length;
}

