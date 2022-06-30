const readline = require("readline-sync");
console.log("please specify the operation to perform like add,sub,mul,div;");
let operation = String(readline.question());
if(operation==='add'){
    console.log("please enter the numbers of elements to add");
    let a = Number(readline.question());
    var sum = 0;
    for (i = 0; i < a; i++) {
        let k=Number(readline.question());
        sum+=k;
    }
    console.log(sum);
}
if(operation==='sub'){
    console.log("You can only subtract 2 numbers")
    var dif=0;
    let a = Number(readline.question());
    let b=Number(readline.question());
    console.log(a-b);
}
if(operation==='mul'){
    console.log("please enter the numbers of elements to multiply");
    let a = Number(readline.question());
    var ans = 1;
    for (i = 0; i < a; i++) {
        let k=Number(readline.question());
        ans*=k;
    }
    console.log(ans);
}
if(operation==='div'){
    console.log("You can only divide two numbers");
    var dif=0;
    let a = Number(readline.question());
    let b=Number(readline.question());
    console.log(a/b);
}