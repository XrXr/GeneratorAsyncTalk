function run(gen) {
    function step(error, result) {
        let done, value;
        if (error) {
            ({ done, value } = gen.throw(error));
        } else {
            ({ done, value } = gen.next(result));
        }
        if (done) {
            return;
        }
        value.then(result => step(null, result),
                   error => step(error));
    }
    step();
}

function* hi() {
    let a = yield Promise.resolve(1);
    console.log(a);

    try {
        yield Promise.reject(2);
    } catch (e) {
        console.log(e)
    }
}

run(hi());