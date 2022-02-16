
var firstName = prompt("First name:");
var lastName = prompt("Last name:");
if (isNaN(firstName) && isNaN(lastName))
{
    String(firstName);
    String(lastName);
    let UpfirstName = firstName.charAt(0).toUpperCase()+firstName.slice(1);
    let UplastName = lastName.charAt(0).toUpperCase()+lastName.slice(1);
    alert(`Hello! ${UpfirstName} ${UplastName}`)
    console.log(`Hello! ${UpfirstName} ${UplastName}`)
}
else 
{
    alert("Wrong input");
    console.log("Wrong input");
}
