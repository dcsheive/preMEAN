function bubbleSort(arr){
    change = 0;
    for(var i = 0; i<arr.length;i++){
        for (var j = 0; j<arr.length; j++){
            if (arr[j-1]>arr[j]){
                var temp = arr[j-1];
                arr[j-1]= arr[j];
                arr[j] = temp;
                change++;
            }
        }
        if (change==0){
            return arr;
        }
        change=0;
    }
    return arr;
}
console.log(bubbleSort([3,2,4,1,5,6]));
console.log(bubbleSort([1,2,3,4,5,6,7]))