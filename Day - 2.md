## String Literals
```js
function beta(a)
{
console.log(`My name is ${a}`)
}
beta('Amrit')

const alpha=(a) =>
{
    console.log(`Hello ${a}`)
}
alpha('Amrit Bista')
```

## Arrow Function
```js
const square =(a) => console.log(a*a)
square(5)
function name(a)
{
    console.log(`Hello ${a}` );
}
name('Amrit Bista')

const name = (a) => console.log(`Hello, I am ${a}`)
name('Amrit Bista')
```

## Block Scope and function scope
Everything inside a function is a function scope
inside { } is a block scope
when a variable is declared with var, the variable is valid throughout the function
```js
//  c='hello'
function a()
{
    var b = 'test'  //function scope variable
    if (true){
        let c = 'alpha'
        console.log(b)  //block variable
    }
    // console.log(c)
    console.log(b)
}
// console.log(c)
a()
```
