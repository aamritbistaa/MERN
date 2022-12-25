/*
//IF-Else
const Compare =(a) =>
{
    if(a==1){
        console.log(a)
    }
    else if(a==2){
        console.log(`second value ${a}`)
    }
    else{
        console.log('last value')
    }
}

Compare(2)
Compare(5)
*/

/*
const Compare = (a,b=2) =>{
    if (a<b){
        console.log(`${a} is smaller than ${b}`)
    }
    else if(a>b){
        console.log(`${a} is greater than ${b}`)
    }
    else if(a==b){
        console.log(`${a} and ${b} are equal`)
    } 
    else{
        console.log('Error')
    }

}
Compare(5)     / 
Compare(5,6)    //the value of b is over written
Compare()
*/

/*
const Compare=(a=10,b=20) =>
{
    if(a!=10 && b!=20)
    {
        console.log(`The new value of a is ${a} and b is ${b}`)
    }
    else if(a==10 && b==20)
    {
        console.log(`The value of a and b both are default and the value is ${a} and ${b}`)
    }
    else{
        console.log('Nothing')
    }
}
Compare()
Compare(20,30)
Compare(11,13)
*/

//Switch case
/*
const Swit = (a) => {
  switch (a) {
    case 1: {
      console.log("The value is 1");
      break;
    }

    case 2: {
      console.log("The value is 1");
      break;
    }
    default: {
      console.log(`the value of  ${a}`)
    }
  }
};

Swit(10)
Swit(9)
Swit(0)
*/
//in switch case if there is no break the case works as case 1 or case 2 or case 3 and so on....

/*
const Calculator = (operator) => {
  let firstnumber = 10;
  let secondnumber = 2;
  let result;
  switch (operator) {
    case "+": {
      result = firstnumber + secondnumber;
      break;
    }
    case "-": {
      result = firstnumber - secondnumber;
      break;
    }
    case "*": {
      result = firstnumber * secondnumber;
      break;
    }
    case "/": {
      result = firstnumber / secondnumber;
      break;
    }
    default: {
      console.log("Nothing");
    }
  }
  console.log(`${firstnumber} ${operator} ${secondnumber} = ${result}`);
};

Calculator("+");
Calculator("*");
// Calculator();
*/