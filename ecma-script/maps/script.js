//?Maps

const map1 = new Map();

let value;
map1.set(34, "Istanbul")
map1.set(35, "Izmir")
map1.set(6, "Ankara")
map1.set(1, "Adana")


//*get
console.log(map1.get(1));  //you can display the value of the key using the get method

//*size
value = map1.size //shows how many values are in the map

//*delete
value = map1.delete(34); //returns as a boolean

console.log(value);

//*has
console.log(map1.has(35)) // it means 'is there a value that have a key of 35' (if ther is, returns boolean (ture))

//*loop through on a map with the 'for of' method

for (let [key, value] of map1) {
    console.log(key, value)
}


for (let value of map1.values()) {
    console.log(value)
}

//*convert from map to array
const array = Array.from(map1);
console.log(array)


//*convert from an array to map
const array2 = [
    [1, "rumeysa"],
    [2, "sumeyye"],
    [3, "zeynep"]
]

const myMap = new Map(array2);
console.log(myMap)