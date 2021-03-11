/*Write a function bubbleSort which takes an array of integers as input and returns
 an array of these integers in sorted order from least to greatest.*/

 function bubbleSort(array) {
    let temp;
    for(let i = 0; i <= array.length; i ++){
      for(let j = i + 1; j <= array.length; j ++){
        if(array[i] > array[j]){
          temp = array[j];
          array[j] = array[i];
          array[i] = temp;
        }
      }
    }
    return array;
  }
  
  console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));