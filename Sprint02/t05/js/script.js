//declare a variable str1
var str1 = "You're catnip to a girl like me. Handsome, dazed,and to die for... ";
//count length
var lenStr1 = str1.length;
//2 index of str1
var indexStr1 = str1.charAt(2);
//UPPERCASE
var upStr1 = str1.toUpperCase();
//concatenation str1
var concatStr1 = str1.concat("", "- Catwoman" );
//declare a variable str2
var str2 = "Batman: \"I tried to save you.\"";
//declare a variable str3
var str3 = "Selina Kyle: catwoman\"Mmm seemsCatwomanlike everyCatWomanwoman you try to savewindsCatWOMANup dead... or deeply resentful.\" "
//slice all catwoman
var replace = str3.replace(/catwoman/gi, " ");
//alert all information
alert("Just string: " + str1 + "\n" +"Length: "+lenStr1 +"\n"+ "Character number 2 is: "+indexStr1 + 
"\n"+"To uppercase " +upStr1 +"\n"+ "Concatenation in phrase"+concatStr1+
"\n"+"[Batman Returns] " + str2+"\n"+replace);