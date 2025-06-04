//foreach map filter find indexOf reduce
// let arr = [1,2,3,4];

// forEach
// arr.forEach(function(val){
//     console.log(val + " Hello");
// })

// map
// let newArr = arr.map(function(val){
//   return val * 3;
// })
// console.log(newArr);

// filter
// let ans = arr.filter(function(val){
//     if(val >= 3) {return true;}
//     else {return false;}
// })
// console.log(ans);

//find
// let ans = arr.find(function(val){
//     if(val === 2) return val;
// })
// console.log(ans);


//OBJECTS
// var obj = {
//     name: "owais",
//     age: 21
// }
// obj.name
// obj['name']

// Object.freeze(obj);
// obj.age = 22;


//functions return
// function abcd(x,y,z){

// }
// abcd.length

// function abcd(){
//     return 12;
// }

// var ans = abcd();
// console.log(ans)

//asyc js coding
//line by line code chale isey kahte hai synchronous
//jo bhi code async nature ka ho, usey side stack mein bhej do and agle code ko chalao jo bhi sync nature ka ho, jab bhi sara sync code chal jayee, tab check karo ki async code complete  hua hoto usey main stack mei lao and chaldo.

// async function abcd(){
//    var blob = await fetch('https://randomuser.me/api/')
//    var ans = blob.json();

//    console.log(ans);
// }
// abcd()