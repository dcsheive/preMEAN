function binarySearch(arr,num){
    var minIndex = 0;
    var maxIndex = arr.length-1;
    var currentIndex; 
    var currentNum;
    while(minIndex<=maxIndex){
        currentIndex = Math.trunc((minIndex+maxIndex)/2)
        currentNum = arr[currentIndex];
        if (currentNum<num){
            minIndex = currentIndex +1;
        }
        else if (currentNum>num){
            maxIndex = currentIndex -1;
        }
        else{
            return currentIndex;
        }
    }
    return -1;
}
console.log(binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200], 93))
console.log(binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94], 15))