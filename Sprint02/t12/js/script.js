let num = 6;
let display = ""
function triangle(length) 
{
  for (let i = 1; i <= length; i++) 
  {
    for (let j = 1; j <= i; j++) 
    {
      display += "*"
    }
    display += "\n"
  }
  alert(display)
}
triangle(num)