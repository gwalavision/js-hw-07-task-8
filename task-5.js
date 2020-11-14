function toCamelCase(str){
    const strArray = Array.from(str);
    strArray.forEach((value, index) => strArray.indexOf(value === '-'))
    
  
}


toCamelCase('the-omaha-beach')