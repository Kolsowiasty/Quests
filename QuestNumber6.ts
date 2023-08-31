function BubbleSortSystem(array: number[]): number
{
  const a = array.length;

  for (let x = 0; x < a - 1; x++) 
  {
    for (let y = 0; y < a - x - 1; y++) 
    {
      if (array[y] > array[y + 1]) 
      {
        const place = array[y];
        array[y] = array[y + 1];
        array[y + 1] = place;
      }
    }
  }
  return array;
}

const NotSortedArray: number[] = [29148, 82738, 223, 513, 231233];
const SortedArray: number[] = BubbleSortSystem(NotSortedArray);

console.log(SortedArray);
