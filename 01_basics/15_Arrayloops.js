// // for of 



// const arr = [1,2,3,4,5]

// // for (const num of arr){
// //     console.log(num);
// // }

// // const greetings = "Hello World!"
// // for(const greet of greetings){
// //     console.log(`Each char is ${greet}`)
// // }

// //Maps

// const map = new Map()
// map.set ("In","India");
// map.set ("ENG","England");
// map.set ("RUS","Russia");

// console.log(map);

// for(const[key,value] of map) {
//     console.log(key,"->",value)
// }

// const a = {
//     game1:'NFS',
//     game2:'sipdermon'
// }

// for (const [key,value] of a){
//     console.log(key,"--",value)
// }


// const myObject = {
//     js: 'javascript',
//     cpp: 'c++',
//     rb: 'ruby',
// }

// for (const key in myObject) {
//     console.log(` ${key} shortcut is for ${myObject[key]}`) ;
// }

// const lala = [
//     {
//         langename: "javascript",
//         languagefilename: "js"
//     },
//     {
//         langename: "ruby",
//         languagefilename: "jjavb"
//     },
//     {
//         langename: "Python",
//         languagefilename: "py"
//     },
    

// ]

// mycoding.forEach( (item) =>{
//     console.log(item.language);
// })

const myNums = [1,2,3,4,4,5,6,6]
const newnum = myNums.filter( (num) => num > 4)
console.log(newnum)