//Exercises: Level3
/*1.Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
YYY-MM-DD HH:mm eg. 20120-01-02 07:05 */

const now = new Date()
let year = now.getFullYear()
let month = (now.getMonth() +1).toString().padStart(2, "0")
let date = now.getDate().toString().padStart(2, "0")
let hour = now.getHours().toString().padStart(2, "0")
let minutes = now.getMinutes().toString().padStart(2, "0")
// console.log(month.toString().padStart(2, "0") )

const form1 = `YYYY-MM-DD HH:mm  ${year}-${month}-${date}  ${hour}:${minutes}`
console.log(form1)