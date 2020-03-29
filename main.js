//loop
function randomNumber(){
  let numero = Math.floor(Math.random() * 1000 + 1);
   console.log(numero);
   return randomNumber();

}
randomNumber();