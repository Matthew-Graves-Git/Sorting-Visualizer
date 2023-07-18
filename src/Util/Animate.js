import { delay } from "./Time";


const AnimateArray = async (arr, edit) => {
    for (let index = 0; index < arr.length; index++) {
        await edit(prevState => arr[index]);
        await delay(3);
    }
}

 
export {AnimateArray};