// //1) a)print the odd number

// anonymous function
 var array = [1,2,3,4,5,6,7,8,9,10];
 var odd = function (){
    var result = array.filter(element => element%2!=0)
    return result;
 }
 console.log(odd());

//iife function
(function odd(){
    var result = array.filter(number => number%2!=0);
    console.log(result);
})
();
// ---------------------------------------------------------------------------
// b) convert all the strings to title caps in a string array
//anonymous function
var str = function (string) {
 var send = string.toLowerCase().split(" ");
  for (var i = 0; i <send.length; i++) {
    send[i] = send[i][0].toUpperCase() + send[i].slice(1); 
  }
  return send.join(" ");
}
console.log(str("welcome to guvi"));

//iife function
(function(string){
     var send = string.toLowerCase().split(" ");
     for(var i = 0; i<send.length; i++){
          send[i]=send[i][0].toUpperCase()+send[i].slice(1);
     }
     console.log(send);
})
("welcome to guvi");
//----------------------------------------------------------------------------
// c) sum of all numbers in an array
// anonymous
var arr =[1,2,3,4,5,6,7,8,9];
var sum = function(arr){
     var result = arr.reduce(accu,curr)
     return result(acc+curr);
     
}
console.log(sum());
     
//iife
var arr =[1,2,3,4,5,6,7,8,9];
(function sum(){
   var res = arr.reduce(accu,curr);
   res = accr+curr;
   console.log(res);
})
();     
//-----------------------------------------------------------------
//3)arrow functions
//a)odd numbers
var array = [1,2,3,4,5,6,7,8,9];
var odd = array.filter(number => number%2!=0);
console.log(odd);

//b)title caps
var string = ["welcome to guvi"];
var result = string.map(string=> string.toUpperCase());
console.log(result);

//c)sum of all numbers
var array = [1,2,3,,4,5,6,7,8,9];
let result = array.reduce((accu,curr) =>{
     return accu+curr;
})
console.log(result);
