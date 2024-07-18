// switch case Syntax 
// switch(case number){
//     case 1:
//         break;
//     case 2:
//         .
//         .
//         .
//         ..
//         default://case
// }

// example :

//Switch case

let day=5

switch(day){
    case 0:
        console.log("Sunday");
        break
    case 1:
        console.log("Monday");
        break
    case 2:
        console.log("Tuesday");
        break
    case 3:
        console.log("Wednesday");
        break
    case 4:
        console.log("Thursday");
        break
    case 5:
        console.log("Friday");
        break
    case 6:
        console.log("Saturday");
        break

    default: //if we give the input out od these case then it will execute
        console.log("Invalid day");
        break
}