module.exports = function check(str, bracketsConfig) {
  let resultStack=[];
  let openElement=0;

  const s = resultStack[openElement-1];

    for (let i=0, lenS=str.length; i<lenS; i++){
      for (const [x,y] of bracketsConfig){
        if (str[i] == y) {
          if (s == x) {
            resultStack.pop();
            openElement--; 
          }else {
            resultStack.push(z);
            openElement++;
          }
        }else {
          if (str[i] == x){
            resultStack.push(z);
            openElement++;
          }        
        }
      }
    }
  
  return !(resultStack.length);
}
