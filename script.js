for(let i=0; i<10; i++){
    console.log(i);
}
let i = 1;
while(i<1_000_000){
    console.log(i);
    i*=2;
}

i = 1;
while(i>10){
    console.log('asjklds');
}

i = 1;
do {
    console.log('asjklds');
} while(i>10);

let fruits=['banana', 'cherry', 'apple', 'pear'];

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

for(const fruit of fruits){
    console.log(fruit);
}

let object = {
    name: 'Kaspar',
    age: 30,
    eyes: 'blue'
}

for(const property in object){
    console.log(property);
    console.log(object[property]);
}