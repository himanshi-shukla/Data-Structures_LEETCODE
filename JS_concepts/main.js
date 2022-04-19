
// function a() {
//     function b() {
//         console.log(myVar);
//     }
//     b();
// }


// var myVar = 1;
// a();


// OUTPUT
// =======
// B Called
// main.js:6 A is called

/*
Lexical order

asnchronous callback
*/



let val1 = 70
let val2 = 8
if (val1 > val2) {
    let c = "🟢"
    console.log(c)
}