// take numbers 
let first = Number(prompt("Start number"));
let last = Number(prompt("End number"));
let display = ""; 
while (first <= last) 
{ 
    let word = " is";  
    if (first % 2 == 0 ){
        word += " even,"; 
    }
    if (first % 3 == 0){
        word += " a multiple of 3,";
    }
    if (first % 10 == 0){
        word += " a multiple of 10";
    }
    if (word == ' is'){
        word = " -";
    }
    display += first +word+"\n";
    first++;
}
console.log(display);