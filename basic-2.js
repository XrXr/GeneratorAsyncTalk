function* foo() {
    console.log("Please send me a value");
    let x = yield;
    console.log("You sent me", x);

    try {
        yield;
    } catch (e) {
        console.log("I caught your exception");
    }
}

let iter = foo();
iter.next();
iter.next(100);
iter.throw(Error());
