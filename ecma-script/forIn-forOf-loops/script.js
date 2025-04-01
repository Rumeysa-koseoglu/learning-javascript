//For in - For of loops

let names = ["Rumeysa", "Furkan", "Sumeyye", "Osman", "Elif"];

names.forEach((name) => {
    console.log(name)
})


//'for in'
for(let name in names) {
console.log(name, names) //for in loop gives us the index number of the array element
}


//'for on'
for(let name of names) {
    console.log(name) //for on loop goves us the value of the array element
}
