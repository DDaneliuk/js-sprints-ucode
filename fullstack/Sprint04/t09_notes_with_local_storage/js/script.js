let input = document.getElementById('notearea')
let output = document.getElementById('cookies_text')
var arr = []

// If there is something in storage: we get it after refreshing the page (to not loose it)
if (window.localStorage.getItem('myStorage')) {
    arr = JSON.parse(window.localStorage.getItem('myStorage'))
    outputFunc()
}

function Add(){
    if (input.value.length == 0) {
        alert ('It\'s empty. Try to input something in "Text input".')
    }
    else {
        // formating the date for storing
        var d = new Date();
        let day = d.getDate();
        if (day<10){ day = '0' + day};
        let month = d.getMonth()+1;
        if (month<10) {month = '0' + month}
        let year = d.getFullYear();
        var twoDigitYear = year.toString().substr(-2);
        let time = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }).replace(' AM','').replace(' PM','');
        var storingDate = ` [${day}.${month}.${twoDigitYear} ${time}]`

        arr.push('--> ' + input.value + storingDate)
        var json_str = JSON.stringify(arr)
        window.localStorage.setItem('myStorage', json_str);
        outputFunc()
        input.value=''
        }
}

function outputFunc(){
    var json_str1 = window.localStorage.getItem('myStorage')
    var arr1 = JSON.parse(json_str1);
    var outputText=''
    for (i=0; i<arr1.length; i++) {
        outputText = outputText + arr1[i] + '<br>'
    }
    output.innerHTML = outputText
}

function Clear(){
    if (confirm('Are you sure?')) {
        window.localStorage.clear();
        output.innerHTML='[Empty]'
        arr = [] // to clean arr if we want to add() again, so old arr will be clear
    }
}