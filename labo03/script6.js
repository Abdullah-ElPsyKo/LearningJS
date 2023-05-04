
function multiplyArray(array, x){
    for (let i = 0; i < array.length; i++) {
        array[i] *= x;
    }
    console.log(array)
}

function  filterByLength(array, x){
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length >= x) {
            newArray.push(array[i]);
        }
    }
    console.log(newArray);
}

function transformAndFilter(array, x){
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            newArray.push(array[i] * x)
        }
    }
    console.log(newArray)
}

transformAndFilter([-3, 0, 2, 5, -1], 3)