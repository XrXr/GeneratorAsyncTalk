function* foo() {
    yield 1;
    yield* bar();
}

function* bar() {
    yield 2;
    yield (yield* qux());
}

function* qux() {
    return 3;
}


let iter = foo();
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
