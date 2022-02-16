// create a function
function total (addCount, addPrice, currentTotal=0)
{
    return addCount*addPrice+currentTotal;
}
//takes 3 parameters
//number of items
//the price per item
//the current total of the price 
//returns the total order sum

let sum = total(1, 0.1);
sum = total(1, 0.2, sum);
sum = total(1, 0.78, sum);
console.log("Sum test 1:  "+sum+"$"); // will return 1.08

let sum2 = total(2, 25);
sum2 = total(4, 13, sum2);
sum2 = total(2, 5, sum2);
console.log("Sum test 2:  "+sum2+"$");// will return 112