let i = 1
const num = 5
let table = ""
while(i < 10)
{
    let mult = num * i
    table += `${num} * ${i} = ${mult}\n`
    i++
}
alert(table)