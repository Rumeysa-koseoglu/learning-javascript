//DATE METHODS

//*to create a new 'date' object, we must use the keyword named "new"
let date = new Date(); //returns current date
console.log(date);  //prints to console

//?we use get methods to get the current date, year, hour, minute, month etc.
console.log(date.getFullYear()); //returns current year
console.log(date.getDate()); //returns current day of the month
console.log(date.getDay()); //returns current day of the week
console.log(date.getHours());//returns the current hour 
console.log(date.getMinutes()); //returns the current minute
console.log(date.getMilliseconds());//returns the milliesecond
 console.log(date.getMonth()); //returns the month of the current year, counting starts from 0
 console.log(date.getSeconds());//returns the second

 console.log(date.toLocaleDateString()); //*returns current date as string (year,month,day)

console.log(date.toLocaleTimeString()); //*returns current hour as string (hour,minute,second)


//?we can assign new values with set methods
console.log(date);
 date.setDate(20); //assings new value to date (day) (also we can use setHours,setMonth, setMinutes ect.)
 console.log(date);

//* for example we always wanted the clock to show two hours more

date.setHours(date.getHours() + 2); //so we are assigning dynamic values
console.log(date);


//* Date() --> if we do not write anything inside the brackets, the current date is
//* returned. but we can assign a specific date inside the brackets
