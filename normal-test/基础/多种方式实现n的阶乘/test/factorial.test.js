const factorial = require("../factorial");
const expect = require("chai").expect;
const n10 = 3628800;
const n100 =
  "93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000";

describe("递归方法", function() {
  beforeEach(function() {
    console.time();
  });
  it("n=10", function() {
    expect(factorial.factorial_1(10)).to.be.equal(n10);
  });
  it("n=100", function() {
    expect(factorial.factorial_1(100)).to.be.equal(n100);
  });
  afterEach(function() {
    console.timeEnd();
  });
});

describe("尾递归方法", function() {
  beforeEach(function() {
    console.time();
  });
  it("n=10", function() {
    expect(factorial.factorial_2(10, 1)).to.be.equal(n10);
  });
  it("n=100", function() {
    expect(factorial.factorial_2(100)).to.be.equal(n100);
  });
  afterEach(function() {
    console.timeEnd();
  });
});

describe("循环方法", function() {
  beforeEach(function() {
    console.time();
  });
  it("n=10", function() {
    expect(factorial.factorial_3(10)).to.be.equal(n10);
  });
  it("n=100", function() {
    expect(factorial.factorial_3(100)).to.be.equal(n100);
  });
  afterEach(function() {
    console.timeEnd();
  });
});

describe("大数相乘方法", function() {
  beforeEach(function() {
    console.time();
  });
  it("n=10", function() {
    expect(factorial.factorial_4(10)).to.be.equal(n10.toString());
  });
  it("n=100", function() {
    expect(factorial.factorial_4(100)).to.be.equal(n100.toString());
  });
  afterEach(function() {
    console.timeEnd();
  });
});

describe("阶乘优化方法", function() {
  beforeEach(function() {
    console.time();
  });
  it("n=10", function() {
    expect(factorial.factorial_5(10)).to.be.equal(n10.toString());
  });
  it("n=100", function() {
    expect(factorial.factorial_5(100)).to.be.equal(n100.toString());
  });
  afterEach(function() {
    console.timeEnd();
  });
});
