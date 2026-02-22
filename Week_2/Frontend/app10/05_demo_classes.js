class Person {
  constructor(name) {
    this._name = name;
  }
  hello() {
    return "Hello I am " + this._name + ".";
  }
  get name() {
    return this._name;
  }
  set name(nme) {
    this._name = nme;
  }
}

class Programmer extends Person {
  hello() {
    return super.hello() + "I am also a programmer.";
  }
}

let p1 = new Person("vishwas");
console.log(p1.hello());
p1._name="John";

let p2 = new Programmer("Ajith");
console.log(p2.hello());
