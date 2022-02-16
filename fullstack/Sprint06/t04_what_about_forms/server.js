let btnChoice = document.querySelector("#choice");
let Options = document.querySelectorAll("input[type=radio]")
let Output = document.querySelector('#answer')

btnChoice.addEventListener('click', () => {
    Options.forEach((option) => {
            if (Options[1].checked){
                Output.innerHTML=`<p>Correct answear! \ud83d\ude80</p>`
            }
        else{
            Output.innerHTML=`<p>Incorrect answear! \ud83d\ude28</p>`
        }
    })
})