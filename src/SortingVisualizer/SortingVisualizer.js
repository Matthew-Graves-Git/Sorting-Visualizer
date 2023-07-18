import React, { useState, useEffect } from 'react';
import "../css/SortingVisualizer.css";
import { AnimateArray } from '../Util/Animate';
import { algoChoices } from '../Util/Constants';
import TimeBar from './TimeBar';

const SortingVisualizer = () => {
    const [arrayMaster, setarray] = useState([]);
    const [steps, setSteps] = useState(0);
    const [algorithms, setAlgorithms] = useState("");

    useEffect(() => {
        resetArray()
        setAlgorithms(algoChoices[0])
    }, []);

    const changeAlgo = (e) => {
        const currentAlgo = algoChoices.filter((obj)=>{
            return  e.target.value  === obj.name;
        })
        setAlgorithms(currentAlgo[0])
    }
    
    const startSort = () => {
        const arr = [...arrayMaster];
        const res = []
        algorithms.sort(arr,arr.length,res);
        setSteps(res.length);
        AnimateArray(res,editArr);
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
        setSteps(0);
        setarray(arr);
    }

    return ( 
        <div className="app-container">
            <section className="button-section">
                <button onClick={startSort}>Sort</button>
                <button onClick={resetArray}>Reset</button>
                <select value={algorithms.name} onChange={changeAlgo}>
                {algoChoices.map((value) => (
                        <option key = {value.name} value={value.name}>{value.name}</option>
                ))}
                </select>
            </section>
            <div className="array-container">
                {arrayMaster && arrayMaster.map((value,index) => (
                    <div className="array-element" 
                    key = {index}
                    style= {{
                        height: `${value}px`,
                        width: "0.8vw",
                        // backgroundColor: `#${toHexPercent(value,100,500)}`
                        }}>
                    
                    </div>
                ))}
            </div>
            <p>{steps}</p>
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
