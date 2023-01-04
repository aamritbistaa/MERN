//---------map / filter--------
//---------callbackfunction / promise / async await----------

// line by line execution -> synchronous
//synchronous - line by line execution
/*

function register()
{
    console.log('register')
}

function sendEmail(){
    console.log('email')
}

function login(){
    console.log('login')
}

register()
sendEmail()
login()
console.log("other work")
*/

//Async -> execution not squentially 
/*
function register(){
    setTimeout(()=>{
        console.log('register')
    },5000);
}

function login(){
    setTimeout(()=>{
        console.log('login')
    },1000);
}

register()
login()
*/

//callback - function inside another function ; register -> login
/*
function register(callback){
    setTimeout(()=>{
        console.log('register');
        callback();
    },2000);
}

function login(){
    setTimeout(()=>{
        console.log('login')
    },1000);
}
register(function(){
    login()
});


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
*/

//callback-hell
/*
function register(callback){
    setTimeout(()=>{
        console.log('register');
        callback();
    },2000);
}

function login(){
    setTimeout(()=>{
        console.log('login')
    },1000);
}

register(function(){
    login()
});
*/



//Promise
/*
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
*/



//Async Await simplified form of promise 
/*
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

// test()


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
*/

//Example

import axios from "axios";
const Call =()=>{
    axios
    .get("https://www.boredapi.com/api/activity")
    .then((response) =>{
        console.log(response.data);
    })
    .catch((err)=>{
        console.log(err);
    });
};
const AsyncPractice = async ()=>{
    try{
        const t = await axios.get("https://www.boredapi.com/api/activity");
        // const {status,statusText,config="ram",validateStatus,data} = t
        const {status} =t
        console.log(status)
        // const {key} = data
        // console.log(t);
        // console.log(status);
        // console.log(statusText);
        // console.log(config);
        // console.log(validateStatus);
        // console.log(activity)
        // console.log(data)
        // console.log(key)
    }catch(error){
        console.log(error);
    }
}
Call()
AsyncPractice()
// export default Call;
