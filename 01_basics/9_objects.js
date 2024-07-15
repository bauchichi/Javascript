

//singleton

//""""""object"""""" literals

// const sym1 = Symbol("key1")

const a = {
    name:"hitesh",
    "full name" : "kaka",
    [sym1]:"lalaondafloor"
}


// console.log(typeof(a[sym1]))

// Object.freeze(a)
// console.log(a)


a.greetings = function(){
    console.log("hello js user")
}

console.log(a.greetings)



// ==============================last part dekhna hai objects ka ====================
