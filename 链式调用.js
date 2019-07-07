class Person {
  constructor(name) {
    this.name = name;
  }
  sleep(time) {
    var now = Date.now();
    while (Date.now() < now + time) {}
    return this;
  }
  say() {
    console.log(this.name);
    return this;
  }
  run() {
    console.log('run');
    return this;
  }
}

console.log(
  new Person('wyc')
    .sleep(2000)
    .say()
    .run()
);
