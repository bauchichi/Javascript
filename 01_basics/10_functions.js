
// function sayMyName(){

//  console.log("q")
//   console.log("d")
//  console.log("k")
//  console.log("l")
//  console.log("o")
// }

// //sayMyName()

// function ak(n1,n2){
//     console.log(n1+n2)
// }

// ak(32,45)


function loginusermessage(username){
    return`${username} just logged in `
}

console.log(loginusermessage("hitesh"))

function calculatecartprice(val1,val2, ...num1){
    return num1
}

console.log(calculatecartprice(200,400,500,2000))

const user = {
    username:"hetish",
    price:560
}


function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

const newarr1 = [200,499,3213]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue([200,300,400]))