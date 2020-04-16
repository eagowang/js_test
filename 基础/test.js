function test(a, b) {
  console.log(b);
  return {
    test: function (c, a) {
      return test(c, a);
    },
  };
}

var a = test(100, 200);
a.test(300);
a.test(400);

var b = test(101).test(201).test(401);

var c = test(102).test(202, 302).test();
