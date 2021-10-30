class Person {
    constructor(firstName, lastName, city) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.age = 0;
        this.friends = []
    }

    foo() {
        console.log("Hello foo")
        return this;
    }

    eat() {
        console.log("eating..", this.firstName)
        return this;
    }

    drink() {
        console.log("drinking..")
        return this;
    }

    lunch() {
        this.eat();
        this.drink()
    }

    makeFriend(anything) {
        this.friends.push(anything)
        return this;
    }

    getMyFriends() {
        console.log(this.friends)
    }
}

function eat() {
    console.log("outside eat")
}

const p1 = new Person("Ravi");
const p2 = new Person("Himanshi");


// // foo()

// // console.log({
// //     age: p1.age,
// //     firstNaaaaamHai: p1.firstName
// // })

// p2.makeFriend(p1)

// p1.foo()
// p1.eat()
// p2.eat()

// p1.lunch()

// // p1.makeFriend(p2)
// // p1.makeFriend(new Person("Gupta"))
// // p1.makeFriend("Argha")
// // p1.makeFriend(1)
// // p1.getMyFriends()


// // const res = p1.makeFriend(p2);
// // console.log("res ", res)

// // res.eat();

// // method chainning
// p1.makeFriend(p2)
//     .makeFriend(new Person("Gupta"))
//     .makeFriend("Argha")

// // p1.makeFriend(1)
// // p1.getMyFriends()

console.log({ p1 })