import React from "react";
import "../css/SortingVisualizer.css";

export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            array: [],
        }
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array = [];
        let arrSize = 100;
        for (let index = 0; index < arrSize; index++) {
            array.push(randomInt(100,500));
        }
        this.setState({array});
    }
    startSort(){
        const arra = this.state.array;
        this.quickSort(arra,0,arra.length-1);
    }

    async quickSort(array, low, high){
        if(low < high){
            let partitionIndex = await this.partition(array,low,high);
            this.quickSort(array,low,partitionIndex-1);
            this.quickSort(array,partitionIndex+1,high);
        }
    }

    async partition(array, low, high){

        let pivot = array[high];
        let lowIndex = low - 1;

        for (let i = low; i <= high - 1; i++) {

            if(array[i] < pivot){
                lowIndex++;
                this.swap(array,lowIndex,i);
                // sets a 25ms timer in between each swap
                let x = new Promise((resolve,reject)=>{setTimeout(function(){ resolve("done");}, 25);});
                await x;
                this.setState({array});
                
            }
            
        }
        this.swap(array,lowIndex+1,high);
        return lowIndex+1;

    }

    timeer(){

    }

    swap(array,low,high){
        let temp = array[low];
        array[low] = array[high];
        array[high] = temp;
    }

    render(){
        const {array} = this.state;

        return(
            <div className="app-container">
                <section className="button-section">
                    <button onClick={this.startSort.bind(this)}>Sort</button>
                </section>
                <div className="array-container">
                    {array.map((value,index) => (
                        <div className="array-element" 
                        key = {index}
                        style= {{height: `${value}px`}}>
                        </div>
                    ))}
                </div>
            </div>
        );

    }

}

function randomInt(min, max){
    return Math.floor(Math.random() * (max-min)+min);
}