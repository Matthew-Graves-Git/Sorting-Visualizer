const quickSort = (array, low, high, res) => {
    if(low < high){
        let partitionIndex = partition(array,low,high,res);
        quickSort(array,low,partitionIndex-1,res);
        quickSort(array,partitionIndex+1,high,res);
    }
}


function partition(array, low, high, res){
    let pivot = array[high];
    let lowIndex = low - 1;

    for (let i = low; i <= high - 1; i++) {

        if(array[i] < pivot){
            lowIndex++;
            swap(array,lowIndex,i,res)
            // sets a 25ms timer in between each swap
        }
        
    }
    swap(array,lowIndex+1,high,res);
    return lowIndex+1;

}


function swap(array,low,high,res){
    let temp = array[low];
    array[low] = array[high];
    array[high] = temp;
    res.push([...array]);
}


  export {quickSort};