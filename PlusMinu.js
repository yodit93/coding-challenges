function plusMinus(arr) {
    const len = arr.length;
    const count = arr.reduce((acc, value) => {
        if(value === 0) acc.zero ++
        else if (value > 0) acc.positive ++
        else acc.negative ++
        return acc;
    }, {positive: 0, negative: 0, zero: 0});
    console.log((count.positive / len).toFixed(6))
    console.log((count.negative / len).toFixed(6))
    console.log((count.zero / len).toFixed(6))
}
