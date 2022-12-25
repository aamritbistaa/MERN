
## Default Export
>Create a file to export a function
```js 
//test1.js

function test()
{
    console.log('test')
}
export default test
```

>Create another file to import the function from the function that export file
```js
//test2.js
import test from './test1.js'

test()
```

>Error encounters when you try to run it

![[Pasted image 20221216160530.png]]

>So, add `"type":"module"` in package.json if package.json doesnot exist create it by `npm init -y` and add the prescribed.

![[Pasted image 20221216161734.png]]

>Now it works

![[Pasted image 20221216161839.png]]

## Array
- Array index starts with 0
```js
let a= [1,2,3] //array initialization 
a[0] // is used to call first item
var b= new Array(a,'hello',98) //array initialization
console.log(a)
console.log(b)
console.log(a[2])
a[1] = 'helloworld'
console.count(a)
```

### Pop Push Shift 
- Pop removes element from last of the array.
- Push adds element to last of the array.
- Shift removes element from front of the array.
- Unshift adds element to front of the array.
```js
var array1 = [1,2,3,'hello',true]
console.log( array1)
console.log(array1.length)


console.log('Pop')
array1.pop()
console.log(array1)

console.log('Push')
array1.push('%$')
console.log(array1)

console.log('Shift operation')
array1.shift()
console.log(array1)

console.log('UNshift operation')
array1.unshift(5)
console.log(array1)
```