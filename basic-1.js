function* foo() {
    console.log("How");
    yield;
    console.log("You");
}

let iter = foo();
iter.next();
console.log("Are");
iter.next();
