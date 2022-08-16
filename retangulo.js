function retangulo(lines, columns){
    (lines > 20 || lines < 1)? ((lines > 20)? lines = 20 : lines = 1): lines;
    (columns > 20 || columns < 1)? ((columns > 20)? columns = 20 : columns = 1): columns;
    let out = `+${columns >= 3 ?"-".repeat(columns-2):''}` + `${columns > 1 ?"+":""}`;
    let content = `|${columns >= 3 ?" ".repeat(columns-2):''}${columns > 1 ?"|":""}`+"\n";
    return lines == 1?out:out+"\n"+`${lines >=3?content.repeat(lines-2):""}`+out;
}

console.log(retangulo(9,22))

