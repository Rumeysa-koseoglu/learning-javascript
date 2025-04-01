// Session storage : it is a memory where we store datas temporarily on the web


//*add value
//we can specify values to be added to  the session storage by using setItem
sessionStorage.setItem("473", "Rumi");//the first part of the brackets should be the key and the second part should be the value ("key","value")
sessionStorage.setItem("252", "zeyno")
sessionStorage.setItem("956", "sumsum");


//*delete value
//we can delete values from session storage by using removeItem
sessionStorage.removeItem("252");//there must be key of the value we want to delete inside the removeItem brackets

//we also can log the value to the console by using getItem

let value = sessionStorage.getItem("473");//we put the key in the brackets to access the value
console.log(value);

//(if there is no value correspnding to the 'key' I provide, it returns null)
//*an example that includes this possibility;

let vlue = sessionStorage.getItem("435");

if (vlue == null){
    console.log("value not found");
}else{
    console.log("value found");
}

//*delete all
//sessionStorage.clear(); //by using this we can clear session storages

//* even if I write a number in parentheses it will appear as a string in session storage
sessionStorage.setItem(325,434);

//lets even loog at the type of value we assigned

let nmbr = sessionStorage.getItem(325);
console.log(typeof nmbr); 

//*array printing

let names = ["Ali","Ahmet","Mehmet","Ayse","Fatma"];

sessionStorage.setItem("names",JSON.stringify(names)); //we could have writtenn ("names",names) instead of this
// but it would ppear as a string in the console or in session storage (not as an array)

//if we also want to print to the console as an array we should use (JSON.parse)
let val = JSON.parse(sessionStorage.getItem("names"));//if we didn't use 'JSON.parse' it would appear as a string
console.log(typeof val);
console.log(val);

//we can return each of the array values and print them to the console
val.forEach(function(name){
    console.log(name)
});
