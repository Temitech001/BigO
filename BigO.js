//big o solution

function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    const currentElement = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currentElement;
  }

  return arr;
}

const arrayToSort = [5, 2, 9, 1, 5, 6];
const sortedArray = insertionSort(arrayToSort);
console.log(sortedArray); // Output: [1, 2, 5, 5, 6, 9]
