class BST {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


// let sum = 0;

// /**
//  * 
//  * Every fn call reset all the values INSIDE function
//  * whatevery you want to persist, move out of fn call
//  */

// function counter(val) {
//     sum = sum+val;

//     return sum;
// }

// console.log("Res : ", counter(10)) // 10
// console.log("Res : ", counter(20)) // 30
// console.log("Res : ", counter(50)) // 80




/**
 * 
 * Second approach
 */

// function counter(val, sum=0) {
//     sum = sum+val;

//     return sum;
// }

// const r1 = counter(10);    // 10
// const r2 = counter(20,r1); // 30
// const r3 = counter(50,r2); // 80


// console.log("r1 : ", r1) 
// console.log("r2 : ", r2)
// console.log("r3 : ", r3)




function outer(valOuter) {

    let sum = 0;
    let arr = [];

    

    // while(valOuter>0) {
    //     sum=sum+valOuter;
    //     valOuter--;
    // }

    // for (let index = 1; index <= valOuter; index++) {
    //     sum=sum+index;
    // }


    function inner(valInner) {
        if(valInner===0) return 0;
        arr.push(valInner*valInner);
        return valInner+inner(valInner-1);
    }

    sum = inner(valOuter)

    console.log("arr : ", arr)
    return sum;
}


console.log("res : ", outer(5))