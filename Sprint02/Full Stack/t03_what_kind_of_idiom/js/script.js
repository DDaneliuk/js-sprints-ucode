// value of day
let description;
// value for number 1- 10 (first try)
let firstTry = Number(prompt("Input number from 1 to 10"));
if (/[0-9]/.test(firstTry) && firstTry <= 10 && !firstTry == 0)
{
    console.log("1 - it's num 1-10");
    switch (firstTry){
        case 1:
            description = "Back to square 1";
            break;
        case 2:
            description = "Goody 2-shoes";
            break;
        case 3: case 6:
            description = "Two's company, three's a crowd";
            break;
        case 4: case 9:
            description = "Counting sheep";
            break;
        case 5:
            description = "Take five";
            break;
        case 7:
            description = "Seventh heaven";
            break;
        case 8:
            description = "Behind the eight-ball";
            break;
        case 10:
            description = "Cheaper by the dozen";
            break;
    }
    alert(description);

}
else 
{
    // value for number 1- 10 (first try)
    let secondTry = Number(prompt("Try again input number from 1 to 10"));
    if (/[0-9]/.test(secondTry) && secondTry <= 10 && !secondTry == 0)
    {
        switch (secondTry){
            case 1:
                description = "Back to square 1";
                break;
            case 2:
                description = "Goody 2-shoes";
                break;
            case 3: case 6:
                description = "Two's company, three's a crowd";
                break;
            case 4: case 9:
                description = "Counting sheep";
                break;
            case 5:
                description = "Take five";
                break;
            case 7:
                description = "Seventh heaven";
                break;
            case 8:
                description = "Behind the eight-ball";
                break;
            case 10:
                description = "Cheaper by the dozen";
                break;
        }
    alert(description);
    }
    else
    {
        console.log("Wrong input");
    }
    
}

