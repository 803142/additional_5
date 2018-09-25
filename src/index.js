module.exports = function check(str, bracketsConfig) {
  let resultStack=[],
      openElement=0;
   for (let i=0, lenS=str.length; i<lenS; i++){
    for (const [x,y] of bracketsConfig){
      const z = str[i];
      const s = resultStack[openElement-1];
      const condtnOne = z == y;
      const condtnTwo = s == x;
      const condtnThree = z == x; 
      if (condtnOne) {
        if (condtnTwo) {
         resultStack.pop();
         openElement--; 
        } 
        else{
        resultStack.push(z);
        openElement++;
        }
      }
     else {
        if (condtnThree){
          resultStack.push(z);
          openElement++;
        }        
     }
    }
  }
  
  return !(resultStack.length>0);
}
