function fizzbuzz(){

    for (let i = 1; i <= 100; i++){
        console.log(i);
        if(i % 3 == 0 && i % 5 ==0){
            console.log('fizzbuzz');
        } else 
            if(i % 3 ==0 || i%10==3){
                console.log('fizz');
            } else
                if(i % 5 == 0 || i%10==5){
                    console.log('buzz');
                }
                
            
    }
}

fizzbuzz();