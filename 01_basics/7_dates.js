//  let date = new Date()
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleTimeString());
// console.log(date.toLocaleString());
// console.log(date.getTimezoneOffset());

// console.log(date.toJSON());
// console.log(date.toISOString());

// console.log(typeof date)

// let mydate = new Date(2023,0,23)
// console.log(mydate.toDateString());

// let mytimestamp = Date.now()

// console.log(mytimestamp);


let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth());
// console.log(newDate.getDay() +1 )


console.log(newDate.toLocaleDateString('default', {
    weekday : "short"
}))