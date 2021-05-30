function removeDuplicates(){
    let arr = str.split(" ")
    let newStr = [...new Set(arr)]
    return newStr.join(" ") 
}

String.prototype.removeDuplicates = removeDuplicates

let str = "Giant Spiders?   What's next? Giants Snakes";
console.log(str)

str = str.removeDuplicates();
console.log(str)

str= ". . . . ? . . . . . . . . . . . ";
console.log(str);

str= str.removeDuplicates();
console.log(str);