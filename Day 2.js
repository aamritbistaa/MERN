//Day - 2


//------------------String literals-----------------------


// function beta(a)
// {
// console.log(`My name is ${a}`)
// }
// beta('Amrit')

// const alpha=(a) => 
// {
//     console.log(`Hello ${a}`)
// }
// alpha('Amrit Bista')



//----------------Arrow Function----------------

// const square =(a) => console.log(a*a)
// square(5)

// function name(a){
//     console.log(`Hello ${a}` );
// }

// name('Amrit Bista')

// const name = (a) => console.log(`Hello, I am ${a}`)

// name('Amrit Bista')



// Block scope and fucntion scope
// everything inside function is function scope
// inside {} is block scope
//  when declared with var, the variable is valid throughout the function
 
//  c='hello'
function a()
{
    var b = 'test'  //function scope variable
    if (true){
        let c = 'alpha'
        d = 'hello'
        console.log(b)  //block variable
    }
    // console.log(c)

    console.log(c)
}

console.log(d)

a()

