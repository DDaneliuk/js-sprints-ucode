exports.checkDivision = (a = 1, b = 60) => {
    let result = '';
    if(a <= b && Number.isInteger(a) && Number.isInteger(b)){
      for(let i = a; i <= b; i++){
      let flag = false;
      result += `The number ${i}`;
      if(i % 2 === 0) {
          result += ` is divisible by 2`;
          flag = true;
      }
      if(i % 3 === 0) {
          result += (flag ? ',' : '') +` is divisible by 3`;
          flag = true;
      }
      if(i % 10 === 0) {
          result += (flag ? ',' : '') +` is divisible by 10`;
      }
      if(!flag){
          result += ` - `
      }
       result += '\n'
   }
   
   console.log(result)  
    }else {
        console.log(`Wrong input, first number must be smaller than second`)
    }
      
}