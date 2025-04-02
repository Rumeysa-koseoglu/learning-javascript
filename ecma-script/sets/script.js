//?Set

const set = new Set();//we created a set using the 'new' keyword
//in sets we can define a value only once, this is the difference from maps and arrays

set.add(true);
set.add(3.14);
set.add("Ali");
set.add(7);
set.add({ username: "rumi", password: "2" });
set.add([1, 2, 3, 4]);

console.log(set.size) //shows how many elements the set has
//even if we added "set.add(7);" twice more, the size would not change

//*delete
set.delete("Ali")
console.log(set.size) //(we cannot delete theh objecct annd array elements of the set because they are reference types)

//*set works with the same logic as map, except that an elemet is defined only once and set does not work with key-value logic

//*has
console.log(set.has("ahmet"))

//*for of loop
for (let value of set) {
    console.log(value)
}

//*convert form set to array
const values = Array.from(set);
console.log(values)

//*I can log the array separately to console
values.forEach((value) => {
    console.log(value)
});

//*convert from array to set
let array = [1, "veli", true, "mustafa", 15, [1, 2, 3]]

const newSet = new Set(array);
console.log(newSet)