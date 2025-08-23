const a = 20;
const b = 30;

const res = a + b;
console.log(res);

function fun() {
    console.log('Inside fun');
}

fun();

class Car{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const c1 = new Car('BMW', 10000);

console.log(c1);