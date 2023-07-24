import { delay } from "./Time";


const AnimateArray = async (arr, edit) => {
    for (let index = 0; index < arr.length; index++) {
        await edit(arr[index]);
        await delay(10000/arr.length);
    }
}

 
export {AnimateArray};