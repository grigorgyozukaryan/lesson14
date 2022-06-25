 for(i = 0; i < 5; i++){
    console.log("մեծ լուփ՝")
    for(j = 0; j < 5; j++){
        console.log("փոքր լուփ՝")
    }

 };
 for( i = 0; i < 2; i++){
    console.log("araji lup")
  for( j = 0; j < 4; j++){
    console.log("erkrord lup")
    for(k = 0; k < 3; k++){
        console.log("errord lup")
    }
  }
 };
 
 let l = 0
 while(l < 5){
   console.log("loop 1"+"-" +l)
   l++
   let m = 0
   while (m < 3){
    console.log("loop 2"+"-" +m)
    m++
    let n = 0
    while(n < 4){
        console.log("loop 3"+"-" +n)
n++
    }
   }
 }

 function calculator (num,num1,op) {

    switch (op){
     
       case "+": return num + num1; break;
       case "-": return num - num1; break;
       case "*": return num * num1; break;
       case "/": return num / num1; break;
       case "%": return num % num1; break;
      
    }
    return "Գրեք ճիշտ օպերատոր";
 }
 console.log(calculator("5",5,"%"));

 