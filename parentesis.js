function parent(arr){
    let pila = [];
    arr.forEach(elem => {
        if(elem == '('){
            pila.push('(');
        } else{ //elem is a ')'    
            if (pila.length > 0){ // elem is a ')'
                pila.pop();
            } else {
                return false; // parentesis are not balanced
            }
        }            
    }); //end of loop    
    return pila.length == 0;
}

console.log(parent(['(',')']));
console.log(parent(['(',')',')','(']));