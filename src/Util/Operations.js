function swap(array,low,high,res){
    let temp = array[low];
    array[low] = array[high];
    array[high] = temp;
    res.push([...array]);
}
export {swap}