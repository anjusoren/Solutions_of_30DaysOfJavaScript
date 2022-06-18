//Exercises: Level 2
/*1.Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F */

// let num = prompt("Enter the num: ")
// if(num>=80 && num<=100){
//     prompt("A")
// }else if(num>=70 && num<=79)
// {
//     prompt("B")
// }else if(num>=60 && num<=69){
//     prompt("C")
// }else if(num>=50 && num<=59){
//     prompt("D")
// }else if(num>0 && num<=49)
// {
//     prompt("F")
// }

/*2.Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer */

// let month = prompt("Enter the month: ")
// let monTh = month.toLowerCase()
// switch(monTh){
//     case 'december':
//     case 'january':
//     case 'february' :
//         prompt("Winter")
//         break
//     case 'september':
//     case 'october':
//     case 'november':
//         prompt("Autumn")
//         break
//     case 'march':
//     case 'april':
//     case 'may':
//         prompt("Spring")
//         break
//     case 'june':
//     case 'july':
//     case 'august':
//         prompt("Summer")
//         break
//     default:
//         prompt("Enter the name of the month correctly.")
// }

/*3.Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.
    What is the day today? saturDaY
    Saturday is a weekend.
    What is the day today? Friday
    Friday is a working day.
    What is the day today? FrIDAy
    Friday is a working day. */

// let day = prompt("What is the day today?")
// let dayY = day.toLowerCase()
// if(dayY==='saturday' || dayY === 'sunday'){
//     prompt(`${day} is weekend.`)
// }else{
//     prompt(`${day} is working day.`)
// }