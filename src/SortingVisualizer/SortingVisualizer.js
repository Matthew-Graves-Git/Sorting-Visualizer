import React, { useState, useEffect } from 'react';
import "../css/SortingVisualizer.css";
import { quickSort } from '../Algorithms/QuickSort';
import { insertionSort } from '../Algorithms/InsertionSort';
import { AnimateArray } from '../Util/Animate';

const SortingVisualizer = () => {
    const [arrayMaster, setarray] = useState([]);

    useEffect(() => {
        resetArray()
    }, []);


    const startSort = () => {
        const arr = [...arrayMaster];
        const r = []
        quickSort(arr,0,arr.length -1, r);
        //insertionSort(arr,arr.length,r);
        const arr2 = [...arrayMaster];
        AnimateArray(r,editArr);
    }


   
    const editArr = (newArr) =>{
        setarray(newArr);
    } 

     
    

    const resetArray = () => {
        const arr = [];
        let arrSize = 100;
        for (let index = 0; index < arrSize; index++) {
            arr.push(randomInt(100,500));
        }
        setarray(arr)
    }

    return ( 
        <div className="app-container">
            <section className="button-section">
                <button onClick={startSort}>Sort</button>
            </section>
            <div className="array-container">
                {arrayMaster && arrayMaster.map((value,index) => (
                    <div className="array-element" 
                    key = {index}
                    style= {{height: `${value}px`}}>
                    </div>
                ))}
            </div>
        </div>
    );
}
 

function randomInt(min, max){
    return Math.floor(Math.random() * (max-min)+min);
}



export default SortingVisualizer;
