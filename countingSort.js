// Reference : https://medium.com/javascript-algorithms/javascript-algorithms-counting-sort-c94a5fd70c9c

let countingSort = (arr) => { // O(N+k)
    let min=Math.min.apply(null,arr);
    let max=Math.max.apply(null,arr);
    let i = min,
        j = 0,
        len = arr.length,
        count = [];
    let result=[];
    for (i; i <= max; i++) {
        count[i] = 0;
    }
    for (i = 0; i < len; i++) {
        count[arr[i]] += 1;
    }
    for (i = min; i <= max; i++) {
        while (count[i] > 0) {
            result[j] = i;
            j++;
            // result.push(i);
            count[i]--;
        }
    }
    return result;
};

console.log(countingSort([5,5,1,1,1,2,2,2,5,5,5,1,1,5]));

// [
//     1, 1, 1, 1, 1, 2,
//     2, 2, 5, 5, 5, 5,
//     5, 5
//   ]