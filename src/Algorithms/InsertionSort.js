async function insertionSort(arr, n, edit) 
{ 
    let i, key, j; 
    for (i = 1; i < n; i++)
    { 
        key = arr[i]; 
        j = i - 1; 
   
        /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
        while (j >= 0 && arr[j] > key)
        { 
            arr[j + 1] = arr[j];
            await delay(10);
            edit(arr)  
            j = j - 1; 
        } 
        arr[j + 1] = key;
        await delay(1);
        edit(arr) 
    } 
} 

function delay(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
}

export {insertionSort}
   