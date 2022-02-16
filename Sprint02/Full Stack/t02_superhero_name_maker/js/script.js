let CustomName = prompt("What animal is the superhero most similar to?", 'bat');
let name = CustomName.toLowerCase();
if (name.length <= 20 && !/[ ]/.test(name) && /[a-zA-Z]/.test(name))
{
    let gender = prompt("Is the superhero male or female? Leave blank if unknown or other.");
    if (/[male]/.test(gender) || /[female]/.test(gender) || !/[ ]/.test(gender))
    {
        let age = prompt("How old is the superhero?");
        if (age.length <= 5 && /[^0]/.test(age))
        {
            var hero;
            if (gender == "male" && age <= 18)
            {
                hero = "boy";
            }
            else if (gender == "male" && age >= 18)
            {
                hero = "man";
            }
            else if (gender == "female" && age <= 18)
            {
                hero = "girl";
            }
            else if (gender == "female" && age >= 18)
            {
                hero = "woman";
            }
            else if (gender == "" && age <=18)
            {
                hero = "kid";
            }
            else if (gender == "" && age >=18)
            {
                hero = "hero";
            }
        }
        else  
        {
            alert("Wrong input");
        }
    }
    else
    {
        alert ("Wrong input");
    }
}
else
{
    alert ("Wrong input");
}
alert("The superhero name is: "+name+"-"+hero);


