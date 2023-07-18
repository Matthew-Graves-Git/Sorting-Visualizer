function shellSort(arr,n,res)
{  
        // Start with a big gap, then reduce the gap
        for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))
        {
          
            // Do a gapped insertion sort for this gap size.
            // The first gap elements a[0..gap-1] are already
            // in gapped order keep adding one more element
            // until the entire array is gap sorted
            for (let i = gap; i < n; i += 1)
            {
              
                // add a[i] to the elements that have been gap
                // sorted save a[i] in temp and make a hole at
                // position i
                let temp = arr[i];
   
                // shift earlier gap-sorted elements up until
                // the correct location for a[i] is found
                let j;
                for (j = i; j >= gap && arr[j - gap] > temp; j -= gap){
                    arr[j] = arr[j - gap];
                    res.push([...arr])
                }
                // put temp (the original a[i]) in its correct
                // location
                arr[j] = temp;
                res.push([...arr])
            }
        }
}

export {shellSort};
