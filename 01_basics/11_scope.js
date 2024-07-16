
// let a = 300

// if (true) {
//     let a = 10
//     const b = 20
//     var k =  30
//     console.log(a)
// console.log(b)
// console.log(k)

// }

// console.log(a)

// for (let i = 0; i< new(Array.length) ; i++) {
//     const element  = array[i];
// }


//============================== intresting ============

// function addone(num){
//     return num + 1
// }

// addone(5)



//''''''''''''''''''''''''''''''' ARROW FUNCTION ''''''''''''''''''''''''''''''''''''''


// const user = {
//     username:"hitesh",
//     price:999,

//     welcome:function(){
//         console.log(``)
//     }
// }


//==============================IIFE===================

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED 2`);
} )('hitesh')


