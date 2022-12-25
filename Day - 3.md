## Var Const Let
- Var can be redeclared as well as reassigned. Var when declared inside a function is limmited to that function only. Outside of the function, it works as a seperate entity.
- Let cannot be redeclared but updated, and is limmited to block scope.
- Const cannot be redeclared or Updated, and is limmited to block scope.
```js
var a=10
let b=10
const c=10
console.log(a,b,c)

var a=20
a=30 //can be reassigned
let b = 30 //error as let cannot be redeclared
b= 20 // variale with let can be reassigned a new value
const c=20  //error
c=20 //error

console.log(a)
console.log(b)
console.log(c)
```

```js
{
    var a = 10
    let b = 10
    const c = 10
}
console.log(a)
console.log(b) // b is limitted to block scope
console.log(c) //c is limitted to block scope

var alpha = 'apple'
function test()
{
    var beta = 'ball'
}
test()
console.log(alpha)
console.log(beta) // here beta is limmited to function scope
```

```js
var alpha = 'apple'
function test()
{
    var beta = 'ball'
}
test()
console.log(alpha)
console.log(beta) //error, here beta is limmited to function scope
```

## Example
```js 
function test(a)
{
    if (a>0)
    {
        console.log(`The number ${a} is positive`)
    }
    else if (a<0)
    {
        console.log(`The number ${a} is negative`)
    }
    else
    {
        console.log(`The number ${a} is zero`)
    }
}
test(5)

const test = (a, b) => 
{
  a > b
    ? console.log(`The number ${a} is greater`)
    : console.log(`The number ${b} is greater`);
};
test(5, 6);
```

## Named export and Default export

### Named Export
- We can export as many values as we want from a single file.
```js
//user.js
export const fetchUsers = () => {
  ...
};

const transformUsers = () => {
  ...
};
  
const getAdminUsers = () => {
  ...
};
export { transformUsers, getAdminUsers };

```

```js
import { fetchUsers, transformUsers, getAdminUsers } from "./users";
```


### Default export
- This type of export allows only one function to be exported
```javascript
// project.js
export default () => {
  ...
};

OR
// project.js

const fetchProjects = () => {
  ...
};
export default fetchProjects;
```

```javascript
import anyNameWeLike from "./projects";
```
