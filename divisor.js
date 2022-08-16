function divisor(arr)
{
    let pos = [];
    let neg = [];
    arr.forEach(element => {
        element>0?pos.push(element):neg.push(element);
    });
    return([pos, neg]);
}

console.log(divisor([1,2,-7,-22,0]))