# Callbackfunction / promise / async await
[[https://www.scaler.com/topics/callback-hell-in-javascript/]]
-   Functions that are passed as arguments to other functions and executed later inside the outer function are called callback functions. We commonly use them in addEventListener, and array methods like filter, map, etc.
-   JavaScript is a single-threaded, synchronous language. Synchronous callbacks are blocking in nature. For example, the array methods have to wait for the callback function to finish for them to finally complete their execution.
-   On the other hand, JavaScript can be made to behave asynchronously. For example, we can observe the asynchronous behavior of JavaScript by implementing the setTimeout function provided by he Web the APIs.
-   Callback hell is a phenomenon that happens when multiple callbacks are nested on top of each other. The two common ways of escaping the callback heare are by using promises and async/await.
-   Promises mainly have three stages such as resolved, rejected, and pending. It makes the code more maintainable and understandable.
-   Async/await is a better way than promises to resolve the callback hell situation. By removing the .then() and .catch() methods of promises, it uses async/await keywords which not only reduces the code complexity but also makes the error handling easier as it can be written within a try/catch block.
## Synchronous
- JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined(**Synchronous**).
```js
function register()
{
    console.log('register')
}
function sendEmail()
{
    console.log('email')
}

  

function login()
{
    console.log('login')
}
register() //executed first
sendEmail() //executed second
login() //executed third
console.log("other work") //executed fourth
```

## Asynchronous
```js
function register() //executed after 5000ms
{
    setTimeout(()=>{
        console.log('register')
    },5000); 
}
function login() //executed after 1000ms
{
    setTimeout(()=>{
        console.log('login')
    },1000);
}
register()
login()
```

## Callback
- Function inside another function ; register -> login
```js
function register(callback)
{
    setTimeout(()=>{
        console.log('register');
        callback();
    },2000);
}
function login()
{
    setTimeout(()=>{
        console.log('login')
    },1000)
}

register(function(){
    login()
});
```

```js
function one(callback){
    console.log('function one')
    callback();
}
function two(){
    console.log('function two')
}
one(function(){
    two()
})
```
## Callbackhell


## Promise
```js
function register(){
    return new Promise((resolve,result) => {
        setTimeout(()=>{
            console.log('register');
            resolve();
        },2000);
    })
}

function sendEmail(){
    return new Promise((resolve,result) => {
        setTimeout(()=>{
            console.log('Email');
            resolve();
        },1000);
    })
}

function login(){
    return new Promise((resolve,result) => {
        setTimeout(()=>{
            console.log('login');
        },500);
    })
}
register().then(sendEmail).then(login);
```

## Async Await
- simplified form of promise
```js
function register(){
    return new Promise((resolve,result) => {
        setTimeout(()=>{
            console.log('register');
            resolve();
        },2000);
    })
}
function sendEmail(){
    return new Promise((resolve,result) => {
        setTimeout(()=>{
            console.log('Email');
            resolve();
        },1000);
    })
}
function login(){
    return new Promise((resolve,result) => {
        setTimeout(()=>{
            console.log('login');
        },500);
    })
}
async function test() {
    await register()
    await sendEmail()
    await login()
}
test()
```

```js
function hello()
{
    return new Promise((resolve,result) => {
        console.log('hello')
        setTimeout(()=>{
            console.log('hello 1')
        },2000)
        resolve()
})
}
function ask()
{
    return new Promise((resolve,result) => {
        console.log('ask')
    })
}
const call = async ()=>{
   await hello()
   await ask()
}
async function call()
 {
     await hello()
     await ask()
 }
call()
```

```js
import axios from "axios";
const Call =()=>{
    axios
    .get("https://www.boredapi.com/api/activitys")
    .then((response) =>{
        console.log(response.data);
    })
    .catch((err)=>{
        console.log(err);
    });
};
const AsyncPractice = async ()=>{
    const t = await axios.get("https://www.boredapi.com/api/activity");
    console.log(t);
}
Call()
AsyncPractice()
```
