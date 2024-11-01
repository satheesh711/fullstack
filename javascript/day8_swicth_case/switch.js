// 1.Use switch case and take Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday as cases and any expression related to case 
Day=prompt("Enter any day(Monday to sunday)")
switch (Day) {
    case "Monday":
        console.log("This is Monday and week day")
        break
    case "Tuesday":
        console.log("This is Tuesday and week day")
        break
    case "Wednesday":
        console.log("This is Wednesday and week day")
        break
    case "Thursday":
        console.log("This is Thursday and week day")
        break
    case "Friday":
        console.log("This is Friday and week day")
        break
    case "Saturday":
        console.log("This is Saturday and weekend")
        break
    case "Sunday":
        console.log("This is Sunday and weekend")
        break
    default:
        console.log("enter corect day")
}

// 2. For of loop:-- iterate array of elements having number 1  to 5

var array = [1,2,3,4,5]
for (var i of array){
    console.log(i)
}


// 3. For of loop:-- take string Nd iterate characters

var string = "satheesh"
var result=""
for(var i of string)
{
    console.log(i)
    result+=i
}
console.log(result)