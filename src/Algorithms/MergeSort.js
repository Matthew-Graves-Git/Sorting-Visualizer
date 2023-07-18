function merge(arr, l, m, r,res)
{
    let n1 = m - l + 1;
    let n2 = r - m;
 
    // Create temp arrays
    let L = new Array(n1);
    let R = new Array(n2);
 
    // Copy data to temp arrays L[] and R[]
    for (let i = 0; i < n1; i++)
        L[i] = arr[l + i];
        
    for (let j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
 
    // Merge the temp arrays back into arr[l..r]
 
    // Initial index of first subarray
    let i = 0;
 
    // Initial index of second subarray
    let j = 0;
 
    // Initial index of merged subarray
    let k = l;
 
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            res.push([...arr])
            i++;
        }
        else {
            arr[k] = R[j];
            res.push([...arr])
            j++;
        }
        k++;
    }
 
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        res.push([...arr])
        i++;
        k++;
    }
 
    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        res.push([...arr])
        j++;
        k++;
    }
}

function sort(arr,l, r, res){
    if(l>=r){
        return;
    }
    let m =l+ parseInt((r-l)/2);
    sort(arr,l,m,res);
    sort(arr,m+1,r,res);
    merge(arr,l,m,r,res);
}

function mergeSort(arr,n, res){
    sort(arr,0,n-1,res);
}


export {mergeSort}
