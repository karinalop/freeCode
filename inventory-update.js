/*Compare and update the inventory stored in a 2D array against a second 2D array
 of a fresh delivery. Update the current existing inventory item quantities 
 (in arr1). If an item cannot be found, add the new item and quantity into the 
 inventory array. The returned inventory array should be in alphabetical order
  by item.
 */

function updateInventory(arr1, arr2) {
    
    for(let i = 0; i < arr2.length; i++){
        let j = 0, found = false;
        while(!found  && j < arr1.length){
            if(arr1[j][1] == arr2[i][1]){
                arr1[j][0] += arr2[i][0];
                found = true;                
            }
            j++;
        }
        if (!found){
            arr1.push(arr2[i]);
        }        
    }
    return arr1.sort(compare);
}

function compare(a,b){
    if(a[1] < b[1]) { return -1; }
    if(a[1] > b[1]) { return 1; }
    return 0
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));
