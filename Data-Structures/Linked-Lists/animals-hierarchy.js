class Animals {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
}

class Dog extends Animals {
    constructor(name, age, sex) {
        super(name, age, sex);
    }
    bark() {
        console.log(`The dog barks!`);
    }
}
