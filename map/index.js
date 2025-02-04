const store = new Map([
    ["shoes",15],
    ["shirt",20],
    ["jeans",22],
    ["socks",10]
]);

let eachElement = 0;

eachElement += store.get("shirt");
eachElement += store.get("shoes")
console.log(eachElement);

store.set("hat",40);
// store.delete("jeans");
console.log(store.has("pants"));

store.forEach((value,key) => console.log(`${key} $${value}`));

// function eachValue(value, key){
//     console.log(`${key} $${value}`)
//}

