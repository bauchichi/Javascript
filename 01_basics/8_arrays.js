
// myArr = [1,2,23,4,5,]

// // const newArr = myArr.join()

// // console.log(newArr)
// // console.log( typeof (newArr))

// // slice, spice 
// console.log("A ", myArr);

// const myn1 = myArr.slice(1,2)
// console.log(myn1);

// console.log("B ", myArr)
// const myn2 = myArr.splice(1,2)

// console.log("c ", myArr)
// console.log(myn2)


// ------------------------ part 2 ------------------------


const marvel_heros = ["superman","flash","ultrman"]
const dc_heros = ["chahc","kaka","lala"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros)


// const all = [...marvel_heros, ...dc_heros]

// console.log(all)


// const arr1 = [1,2,3,[4,5,6],7,[2,3,4,[4,5],6]]

// const arr2 = [arr1.flat(Infinity)]
// console.log(arr1)
// console.log(arr2)

// console.log(Array.isArray("huehue"))

console.log(Array.from({name:"heuhue"}))  /////IMPORTANT

let score = 100
let score2 = 200 
let score3 = 300

console.log(Array.of(score,score2,score3))