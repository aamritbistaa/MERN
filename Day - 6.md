## Object
- Key value pair
- function inside an object is called as method

```js
const Person = {
    firstname : "Amrit",
    lastname : "Bista",
    id: 12,
    fullname:function alpha(){
        return Person.firstname     //common practice
        // return this.firstname    //same as above line but in es6 this pointer concept 
    }
}
console.log(Person)
console.log(Person.firstname) //Dot
console.log(Person['firstname']) //bracket
```

### Calling an Object
- An object can be called generally by 2 method
1.  `Dot` method (objectname.keyname)
	`console.log(Person.firstname) //Dot`
2. `Bracket` method (objectname['keyname'])
	`console.log(Person['firstname']) //bracket`

```js
let obj = {
    cat:'meow',
    dog:'bark'
}
let dog = "cat"

// case 1
 let sound = obj[dog]    // this accesses the content by replacing dog
console.log(sound)  //here meow is printed

//case 2
let sound = obj.dog // this accesses the content of dog inside of object obj
console.log(sound) //bark is printed
```


```js
  

const obj ={
    firstName:'Amrit',
    lastName:'Bista',
    address:['Sinamangal','Baneshwor'],
    classes:{
        type1:'React',
        type2:'Reactnamtive'
    }
}
obj.address.push('Kathmandu')
console.log(obj) //displays content inside the object obj
console.log(obj.address) //displays conent from the key address from object obj
console.log(obj.classes.type2) //displays conent of type2 from the key classes from object obj
console.log(Object.keys(obj)) //displays the every key of object obj
console.log(Object.values(obj)) //displays every value of object obj
```

- Here `(Object.keys(newobj)).length` gives the length of keys of object named newobj
```js
let newobj={
}
let length = (Object.keys(newobj)).length
console.log(length)
if (length==0){
    console.log('empty')
}
else if (length != 0){
    console.log('notempty')
}
else
    console.log('Error')
```


## Pop last element of a array 
```js
const a = [1,2,3,4,5,6,0]
let b =a.length
console.log(a.pop())
console.log(a[b-1])
console.log(a.slice(b-1))
```