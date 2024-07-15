

//singleton

//""""""object"""""" literals

// const sym1 = Symbol("key1")

// const a = {
//     name:"hitesh",
//     "full name" : "kaka",
//     [sym1]:"lalaondafloor"
// }


// console.log(typeof(a[sym1]))

// Object.freeze(a)
// console.log(a)




// ==============================last part dekhna hai objects ka ====================


const reguser = {
    email:"lalaondaboat",
    fullname:{
        userfullname:"heuheu",
        sidename:"chahca"
    }
}

console.log(reguser.fullname.sidename)


const a ={ 1:"a", 2:"b"}
const b ={ 3:"a", 4:"k"}

const c = {...a, ...b}
console.log(c)

const users  = [
    {
        id:1,
        email:"heuheu",
    },
    {
        tame:2,
        name:"chame",
    }
]


users[1].email
console.log(id)

console.log(Object.keys(id))//galat hogya code halka sa 

console.log(Object.entries())

console.log(users.hasOwnProperty)

