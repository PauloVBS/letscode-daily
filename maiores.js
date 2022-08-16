function maiores(primeiro, segundo, terceiro){
    return (primeiro + segundo + terceiro) - Math.min(primeiro, segundo, terceiro);
}
console.log(maiores(1, 2, 3))
console.log(maiores(-1, 0, 3))
console.log(maiores(7, 9, 2))
console.log(maiores(-21, -10, -15))
console.log(maiores(0, 2, 3))