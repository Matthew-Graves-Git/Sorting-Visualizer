function bubbleSort(arr, n, res)
{
	let i, j, temp;
	let swapped;
	for (i = 0; i < n - 1; i++)
	{
		swapped = false;
		for (j = 0; j < n - i - 1; j++)
		{
			if (arr[j] > arr[j + 1])
			{
				// Swap arr[j] and arr[j+1]
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				swapped = true;
                res.push([...arr]);
			}
		}

		// IF no two elements were
		// swapped by inner loop, then break
		if (swapped === false)
		break;
	}
}

export {bubbleSort};