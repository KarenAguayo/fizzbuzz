function fizBuz(numero) {
  if(numero%3==0&&numero%5==0)
    return "fizzbuzz";
  else
  {
    if(numero%3==0)
     return "fizz";
    else{
      if(numero==5)
       return "buzz";
    }
  }
  return numero 
}
export default fizBuz;