import { swap } from "../Util/Operations";
function quickSort(arr, n, res){
    sort(arr,0,n-1,res);
}

function sort(array, low, high, res){
    if(low < high){
        let partitionIndex = partition(array,low,high,res);
        sort(array,low,partitionIndex-1,res);
        sort(array,partitionIndex+1,high,res);
    }
}


function partition(array, low, high, res){
    let pivot = array[high];
    let lowIndex = low - 1;

    for (let i = low; i <= high - 1; i++) {

        if(array[i] < pivot){
            lowIndex++;
            swap(array,lowIndex,i,res)
        }
        
    }
    swap(array,lowIndex+1,high,res);
    return lowIndex+1;

}


  export {quickSort};