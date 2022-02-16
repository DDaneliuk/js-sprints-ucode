exports.firstUpper = (string) => {
    if(typeof string !== 'string') {
        return ' ';
    }else if(string == ''){
        return ' ';
    }else{
       return string.trim()[0].toUpperCase() + string.trim().toLowerCase().slice(1); 
    }
}