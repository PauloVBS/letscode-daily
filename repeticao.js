let vetor = [1, 1, 2, 3, 4, 3, 1, 5];

function reduceVector(arr){
    const object ={};
    arr.forEach(element => {
        object.hasOwnProperty(element)?(object[element] = object[element]+1):(object[element] = 1)
    });
    for(const[key,value] of Object.entries(object)){
        value == 1 && delete object[key]
    }
    for(const[key, value] of Object.entries(object)){
        console.log(`Número ${key}: ${value} vezes`)
    }
}
reduceVector(vetor)
reduceVector([0,0,0,0])
reduceVector([1,2,3,4,4,4,4])
reduceVector([])
