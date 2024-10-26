/* 1.take two strings with spaces at starting of one string and 
at the ending of another string remove the spaces and 
concat the both string and 
convert the combined string into uppercase string */
console.log("frst task")
var str1 = "      first name "
var str2="last name     "
var str3=(str1.trimStart()).concat(str2.trimEnd()).toUpperCase()
console.log(str3)



/* 2.Extract Middle Portion of the string and
 get the last index of char of extracted string and
 Convert the portion to Lowercase */
 console.log("second task")
 var str4 = "sathIsh"
 var str5 = str4.slice(2,str4.length-2)
 console.log(str5)
 console.log(str5[str5.length-1] +" "+ str5.toLowerCase())

/* 3.take a single char and concat string to that char and 
convert the resulted string to uppercase and 
then extract the last second char  */
console.log("thrd task")
var str6="s"
var str7="ram"
var str8=str6.concat(str7)
console.log(str8)
console.log(str8.toUpperCase()[str8.length-2])

/* 
4.we have 2 string and extract first 3 chars of first string and
 extra last 3 chars of another string and concat those 2 results together
 and first char and last char of the resulted concatinated string should as uppercase */
 console.log("furth task")
 var str9 = "sira"
 var str10 = "satheesh"
 var str11 = (str9.slice(0,3)).concat(str10.slice(-3))
 console.log(str11)
 var str12=(str11[0].toUpperCase()).concat(str11.slice(1,str11.length-1),str11[str11.length-1].toUpperCase())
 console.log(str12)
 
/* 5.You are given a string with extra spaces at the beginning and end.
 You need to trim the string, make the first and last characters uppercase, 
 extract a specific part of the string, 
 concatenate it with another string */

 console.log("fifth task")
 var str13="      satheesh         ".trim()
 var str14=(str13[0].toUpperCase()).concat(str13.slice(1,str13.length-1),str13[str13.length-1].toUpperCase())
 var str15="sira".concat(str14.slice(3,str14.length-2))
 console.log(str14)
 console.log(str15)


/* 6."hello there , how are you " find the index of are word in the sentence */

console.log("sixth task")
var str16 = "hello there , how are you "
var str17 = str16.indexOf("are")
console.log(str17)


