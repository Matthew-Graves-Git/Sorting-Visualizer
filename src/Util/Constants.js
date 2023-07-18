import { bubbleSort } from '../Algorithms/BubbleSort';
import { quickSort } from '../Algorithms/QuickSort';
import { insertionSort } from '../Algorithms/InsertionSort';

const algoChoices = [
    { 
        name:"Quick",
        tc:"nlog(n)",
        sort:function(arr,n,res){
            quickSort(arr,n,res)
        }
    },
    { 
        name:"Bubble",
        tc:"n^2",
        sort:function(arr,n,res){
            bubbleSort(arr,n,res)
        }
    },
    { 
        name:"Insertion",
        tc:"n^2",
        sort:function(arr,n,res){
            insertionSort(arr,n,res)
        }
    },
]

export {algoChoices}