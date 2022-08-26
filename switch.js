function trade(a,b){
    a = a + b;
    b = a - b;
    a = a - b;
    console.log( `a = ${a}, b = ${b}`)
}
let a = 2;
let b = 1;
trade(a,b)