//Exercises: Level3
/*1. Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.*/

// let mon = prompt("Enter the month")
// let month = mon.toLowerCase()

// switch(month){
//     case 'april':
//     case 'june':
//     case 'september':
//     case 'november':
//         prompt(`${mon} has 30 days.`)
//         break
//     case 'january':
//     case 'march':
//     case 'may' :
//     case 'july':
//     case 'august':
//     case 'october':
//     case 'december':
//         prompt(`${mon} has 31 days.`)
//         break
//     case 'february':
//         prompt(`${mon} has 28 days`)
//         break
//     default:
//         prompt("Enter the right month.")
// }

//Write a program which tells the number of days in a month, now consider leap year.
let year = prompt("enter the year first:")
let mon = prompt("Enter the month")
let leapmonthDay;
if(year%4===0){
leapmonthDay =29
}else{
    leapmonthDay =28 
}
let month = mon.toLowerCase()

switch(month){
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        prompt(`${mon} has 30 days.`)
        break
    case 'january':
    case 'march':
    case 'may' :
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        prompt(`${mon} has 31 days.`)
        break
    case 'february':
        prompt(`${mon} has ${leapmonthDay} days`)
        break
    default:
        prompt("Enter the right month.")
}
