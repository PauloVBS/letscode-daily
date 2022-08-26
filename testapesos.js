//essa função recebe uma array de 9 valores e retorna qual o diferente
function testWeight(arr){
    val1 = reducer(arr.slice(0,4));
    val2 = reducer(arr.slice(4,8));
    if(val1 == val2)
        return "O mais pesado é o 9° peso";
    else if(val1 > val2){
        val1 = reducer(arr.slice(0,2));
        val2 = reducer(arr.slice(2,4));
            if(val1 > val2){
                arr[0] > arr[1]?console.log("o mais pesado é o 1° peso"):console.log("o mais pesado é o 2° peso");
            }else{
                arr[2] > arr[3]?console.log("o mais pesado é o 3° peso"):console.log("o mais pesado é o 4° peso");
            }
    }else if(val2 > val1){
        val1 = reducer(arr.slice(4,6));
        val2 = reducer(arr.slice(6,8));
            if(val1 > val2){
                arr[4] > arr[5]?console.log("o mais pesado é o 5° peso"):console.log("o mais pesado é o 6° peso");
            }else{
                arr[6] > arr[7]?console.log("o mais pesado é o 7° peso"):console.log("o mais pesado é o 8° peso");
            }
    }
}
function reducer(arr){
    return arr.reduce((acumulador, valorAtual)=> acumulador + valorAtual, 0)
}
testWeight([2,2,2,2,2,3,2,2,2])