function checkBrackets(str) {
    if(typeof(str) === typeof("")){
        let firstbrackets = 0;
        let lastbrackets = 0;
        let result;
        for (let i =0; i<=str.length;i++){
            if(str.charAt(i)=="("){
                firstbrackets++
                if (firstbrackets > lastbrackets){
                    result = firstbrackets - lastbrackets;
                }
                else if (lastbrackets > firstbrackets){
                    result = lastbrackets - firstbrackets;
                }
                else if (lastbrackets == firstbrackets){
                    result = 0;
                }
            }
            else if (str.charAt(i)==")"){
                lastbrackets++
                if (firstbrackets > lastbrackets){
                    result = firstbrackets - lastbrackets;
                }
                else if (lastbrackets > firstbrackets){
                    result = lastbrackets - firstbrackets;
                }
                else if (lastbrackets == firstbrackets){
                    result = 0;
                }
            }
        }
        return result;
        
    }
    else {
        return -1;
    }
};

