                    //--------Object---------
                    //key value pair
                    //function inside object is called method

/*
const Person = {
    firstname : "Amrit",
    lastname : "Bista",
    id: 12,
    fullname:function alpha(){
        return Person.firstname
        // return this.firstname 
        // statement 9 and 10 are same but in new form (ES6) line 9 is practised
    }
}

            // object is called by 2 form 
            // bracket 
            // dot 
            // obj['    ']
            //obj.keyname

console.log(Person)
console.log(Person.firstname) //Dot
console.log(Person['firstname']) //bracket 

*/


/*
let obj = {
    cat:'meow',
    dog:'bark'
}

let dog = "cat"

// case 1
 let sound = obj[dog]    // this accesses the content by replacing dog
//here meow is printed


//case 2
let sound = obj.dog // this accesses the content of dog inside of object obj
console.log(sound)
//bark is printed

*/


/*
let hari={
    name:'Hari sharma',
    age:25
}
console.log(hari.name)
console.log(hari.age)
console.log(hari['age'])
let age = 'name'
console.log(hari[age])
console.log(hari['age'])
*/


const obj ={
    firstName:'Amrit',
    lastName:'Bista',
    address:['Sinamangal','Baneshwor'],
    classes:{
        type1:'React',
        type2:'Reactnamtive'
    }
}

// obj.address.push('Kathmandu')
// console.log(obj)
// console.log(obj.address)

// console.log(obj.classes.type2)
// console.log(Object.keys(obj))
// console.log(Object.values(obj))

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



/*
------------to pop last item----------
const a = [1,2,3,4,5,6,0]
let b =a.length
// console.log(a.pop())
// console.log(a[b-1])
// console.log(a.slice(b-1))
*/




//Expo cli install
// mobile + web 
