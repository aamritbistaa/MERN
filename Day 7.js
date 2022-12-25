/*
const double =(...nums)=>{  //nums is parameter
    // array ...nums
    console.log(nums)
}

const result = double(1,2,3,4,5)    //1,2,3,4,5 are argument 
// console.log(result)
*/

//-----------spread operator rest operator-------


// spread operator
// 1.array 2.object



/*
var a=[1,2,3]
var b=a
b.push('d')
console.log(b)
console.log(a)
// change in b also reflected change in a being a refrence type 
// function,object , array = refrence data type
*/
/*
let fruit=['apple','banana']
console.log(fruit)
let newfruit=fruit
newfruit.push('orange')
console.log(newfruit)
console.log(fruit) //orange is pushed in fruit also
//drawback of rest operator --- restoperator changed all array values that can be discarded by spread(...)operator
let newnewfruit=[...fruit,'a']  //push
newnewfruit.push('cherry')
console.log(newnewfruit)
console.log(fruit)  //rest
console.log(...fruit)   //spread
*/

/*
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
*/

/*
const double=(a,b,...nums)=>{
    console.log(a)
    console.log(b)
    console.log(nums)
}
double('a',2,3,4)
*/

//--------Object/array destructuring----
/*
//array destrucuring
const a = ['a','b','c','d',5,6,7,'g']
const[w,x,y,...z]=a
console.log(w,x,y,z)
*/

//object destructuring
/*
let a= {
    name:'amrit',
    k:'mern',
    age:99,

}
const {k,name,age} = a
console.log(k,name,age)
*/

/*
let person ={
    fname:'ram',
    lname:'stha',
    age:30,
}

const {lname,age} = person
console.log(lname,age)
*/

