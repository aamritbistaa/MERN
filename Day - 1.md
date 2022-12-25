## Introduction
```
Dynamic language
alphabet cant be re configured
string declaration will always be string
case sensitive
```

## JavaScript engine
```
V8 Chrome
SpiderMmonkey
```

- **ES6**, ECMAScript 2015 - standard guideline 

## Data type
### 1. Primitive data type
1. String - "2", "ram". declared inside of " "
2. Number - 1, 12
3. Boolean - true or false
4. Null -  variable that has no value assigned to it
	`var a = null`
5. Undefined - variable that has not been assigned with any value
	```js
	let luckynum;
	console.log(luckyNum); //undefined
	luckyNum = 'twenty-four'; //string
	luckyNum = 5; //int
```
6. Big int - 

```js
const alsoHuge = BigInt(9007199254740991)
```
7. Symbol - Its value is kept private and for internal use.
```js
const NAME = Symbol()
const person = {
  [NAME]: 'Flavio'
}
person[NAME] //'Flavio'
const RUN = Symbol()
person[RUN] = () => 'Person is running'
console.log(person[RUN]()) //'Person is running'
```

### 2. Reference Data type
1. Object
	var a = {name:"amrit"}
2. Array 
	var a = [{}, 1 , "key"]
3. Function


## Declaring variable
1. var - Var will declare variable, that is valid through out the function.
2. let - When used in code, the variable is valid throught out the scope only. More in practice easy to debug.
3. const - Used to declare constant type variable 

```js
function test(){
c=2 \\ here c is global variable declaration
console.log(c)
}
```

## Naming
- Start with an alphabet 
- Not with special character , symbol
- Not specific keyword like let, return
 
## Ternary operator
```js
var a = true
!a ? true : false
//condition ? true:false
```

## Function
- Classical function use **return** keyword to return value. If it is missed then the function will return undefined.
- Arrow function reduces code, provides implicit return, made code cleaner.
```js
function add(a,b)
{
console.log(a+b)
}

//Arrow Function
const add=(a,b) =>{
console.log(a+b)
}

add(5,6)
```
