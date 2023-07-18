import { bubbleSort } from '../Algorithms/BubbleSort';
import { quickSort } from '../Algorithms/QuickSort';
import { insertionSort } from '../Algorithms/InsertionSort';
import { shellSort } from '../Algorithms/ShellSort';
import { mergeSort } from '../Algorithms/MergeSort';

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
        tc:"n\u00B2",
        sort:function(arr,n,res){
            bubbleSort(arr,n,res)
        }
    },
    { 
        name:"Insertion",
        tc:"n\u00B2",
        sort:function(arr,n,res){
            insertionSort(arr,n,res)
        }
    },
    { 
        name:"Shell",
        tc:"n\u00B2",
        sort:function(arr,n,res){
            shellSort(arr,n,res)
        }
    },
    { 
        name:"Merge",
        tc:"nlog(n)",
        sort:function(arr,n,res){
            mergeSort(arr,n,res)
        }
    },
]

export {algoChoices}