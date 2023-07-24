import React, { useState, useEffect } from 'react';
import "../css/SortingVisualizer.css";
import { AnimateArray } from '../Util/Animate';
import { algoChoices } from '../Util/Constants';
import TimeBar from './TimeBar';

const SortingVisualizer = () => {
    const [arrayMaster, setarray] = useState([]);
    const [steps, setSteps] = useState(0);
    const [algorithms, setAlgorithms] = useState("");
    const [isSorting, setisSorting] = useState(false);
    const [isSorted, setisSorted] = useState(false);
    const [size, setsize] = useState(100);
    const [boundedSize, setboundedSize] = useState(100);

    const min = 10;
    const max = 100;


    useEffect(() => {
        resetArray(size)
        setAlgorithms(algoChoices[0])
    }, []);

    const changeAlgo = (e) => {
        const currentAlgo = algoChoices.filter((obj)=>{
            return  e.target.value  === obj.name;
        })
        setAlgorithms(currentAlgo[0])
    }
    
    const startSort = async () => {
        setisSorting(true)
        const arr = [...arrayMaster];
        const res = []
        algorithms.sort(arr,arr.length,res);
        setSteps(res.length);
        await AnimateArray(res,editArr);
        setisSorting(false)
        setisSorted(true)
        
    }
  
    const editArr = (newArr) =>{
        setarray(newArr);
    }
    const changeArrSize = (e) =>{
        
        if(e.target.value <= max && e.target.value >= min){
        resetArray(e.target.value)
        setboundedSize(e.target.value)
        }
        setsize(e.target.value);
    } 

    const resetArray = (size) => {
            const arr = [];
            for (let index = 0; index < size; index++) {
                arr.push(randomInt(100,500));
            }
            setSteps(0);
            setarray(arr);
            setisSorted(false)
    }

    return ( 
        <div className="app-container">
            <section className="button-section">
                <button className='selection-child' disabled={isSorting || isSorted} onClick={startSort}>Sort</button>
                <button className='selection-child' disabled={isSorting} onClick={()=>resetArray(size)}>Reset</button>
                <select className='selection-child' disabled={isSorting} value={algorithms.name} onChange={changeAlgo}>
                {algoChoices.map((value) => (
                        <option key = {value.name} value={value.name}>{value.name}</option>
                ))}
                </select>
                <input className='selection-child' disabled={isSorting} type="number" min={`${min}`} max={`${max}`} value={size} onChange={changeArrSize}></input>
            </section>
            <div className="array-container">
                {arrayMaster && arrayMaster.map((value,index) => (
                    <div className="array-element" 
                    id = {index}
                    key = {index}
                    style= {{
                        height: `${value}px`,
                        width: `${80/boundedSize}vw`,
                        // backgroundColor: `#${toHexPercent(value,100,500)}`
                        }}>
                    
                    </div>
                ))}
            </div>
            <p>{steps} ms</p>
            <TimeBar bigO = {algorithms.tc}/>
        </div>
    );
}
 

function randomInt(min, max){
    return Math.floor(Math.random() * (max-min)+min);
}

function toHexPercent(value, min, max){
    let percent = (value - min) / (max - min);
    console.log(Math.round((16777215 * percent)).toString(16)) 
    return Math.round((16777215 * percent)).toString(16);
}



export default SortingVisualizer;
