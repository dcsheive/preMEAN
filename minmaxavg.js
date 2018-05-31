function minMaxAVG(arr){
    var min = arr[0], max = arr[0], sum = 0;
    for (var i = 0; i<arr.length; i++){
        if (arr[i]<min){
            min = arr[i];
        }
        if (arr[i]>max){
            max = arr[i];
        }
        sum += arr[i];
    }
    sum /= arr.length;
    return "The minimum is "+min+", the maximum is "+max+", and the average is "+sum;
}
console.log(minMaxAVG([1, -2, 9, 4]));