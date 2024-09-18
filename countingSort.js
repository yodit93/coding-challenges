function countingSort(arr) {
    const frequencyArr = new Array(100).fill(0); // creates array of zeros
    for(const ele of arr) {
        frequencyArr[ele] += 1;
    }
    
    return frequencyArr;

}
