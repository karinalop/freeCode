/*The mathematical term symmetric difference (△ or ⊕) of two sets is the set
 of elements which are in either of the two sets but not in both. For example,
  for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements.
 So to evaluate an expression involving symmetric differences among three elements
  (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above,
   and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

Create a function that takes two or more arrays and returns an array of their
 symmetric difference. The returned array must contain only unique values
  (no duplicates).*/


function sym(args) {
    let sym = [];
    args.forEach(element => {
        sym = dif(sym,element);   
    });    
    return sym.sort(); 
}

//helper function to find the symetric difference between 2 arrays
function dif (array1, array2){
    let dif = [];
    array1.forEach(element => {
        if(!array2.includes(element)){
            dif.push(element);
        }
    });

    array2.forEach(element => {
        if(!array1.includes(element)){
            dif.push(element);
        }
    });
    
    return dif;
}

console.log(sym([[1, 2, 3], [5, 2, 1, 4]]));

function dif_sym(){
    console.log(arguments);
}

dif_sym([1, 2, 3], [5, 2, 1, 4]);
