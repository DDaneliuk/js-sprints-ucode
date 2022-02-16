var number = prompt("Input a number 1-4: " );
checkNum(number);
function checkNum(num){
    //check number in console 
    console.log(num);
    if (num == 1){
        alert(num = num*2/"a");
    } 
    else if (num == 2){
        alert((num-num)/0);
    }
    else if (num == 3){
        alert(0*1.7976931348623157E+10308);
    }
    else if (num == 4){
        alert(num*40000000 == 1.7976931348623157E+10308);
    }
    else {
        alert("Wrong input")
    }

};



