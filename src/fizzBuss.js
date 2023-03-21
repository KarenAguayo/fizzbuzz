export function fizBuz(numero) {
  if(numero%3==0&&numero%5==0)
    return "fizzbuzz";
  else
  {
    if(numero%3==0)
     return "fizz";
    else{
      if(numero%5==0)
       return "buzz";
    }
  }
  return numero 
}
export function cadenaFizzBuzz(num)
{
    let cadena = "";
    for(let i=1;i<=num;i++)
    {
        cadena = cadena + fizbuz(i);
        if(i<num)
        {
            cadena=cadena+", ";
        }
    }
    return cadena;
}