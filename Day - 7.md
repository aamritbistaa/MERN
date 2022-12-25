## Parameter and argument
```js
const double =(...nums)=>{  //nums is parameter
    // array ...nums
    console.log(nums)
}
const result = double(1,2,3,4,5)    //1,2,3,4,5 are argument
// console.log(result)
```
---
## Spread / Rest operator
- **Spread operator** allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 values are expected.
- Spread syntax can be used when all elements from an object or array need to be included in a new array or object
1. array
2. object
```js
//rest operator
var a=[1,2,3]
var b=a
b.push('d')
console.log(b)
console.log(a)
// change in b also reflected change in a being a refrence type
// function,object , array = refrence data type
```

```js
let fruit=['apple','banana']
console.log(fruit)
let newfruit=fruit
newfruit.push('orange')
console.log(newfruit)
console.log(fruit) //orange is pushed in fruit also
//drawback of rest operator --- restoperator changed all array values that can be discarded by spread(...)operator
let newnewfruit=[...fruit,'a']  //push
newnewfruit.push('cherry')
console.log(newnewfruit)
console.log(fruit)  //rest
console.log(...fruit)   //spread
```

```js
const person={
    name:'amrit',
    job:'student'
}
const newperson={
    ...person,
    class:'Mern'
}
console.log(person)
console.log(newperson)
```
---
## Object/ array Destructuring
### Array Destructuring
```js
const a = ['a','b','c','d',5,6,7,'g']
const[w,x,y,...z]=a
console.log(w,x,y,z) 
//w,x,y takes data linearly while z takes all remaining data due to spread (...) operator
```

### Object Destructuring
```js
let a= {
    name:'amrit',
    k:'mern',
    age:99,
}
const {k,name,age} = a
console.log(k,name,age)
```

```js
let person ={
    fname:'ram',
    lname:'stha',
    age:30,
}
const {lname,age} = person
console.log(lname,age)
```
