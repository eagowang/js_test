// regexp对象有test,exec方法，string有match方法
var reg = /a[123]b/g;
var str = 'a0b a1b a2b a3b a4b';
var matches = str.match(reg);
console.log(matches); //[ 'a1b', 'a2b', 'a3b' ]

// 惰性匹配
var str1 = 'abbbbbbbbbbbbbbbc';
var reg1 = /ab{2,5}?/g;
var res = reg1.exec(str1);
console.log(res); // [ 'abb', index: 0, input: 'abbbbbbbbbbbbbbbc', groups: undefined ]

// 多选分支
var reg2 = /nice|nihao/g;
var str2 = 'hello nice good nihao';
var matches2 = str2.match(reg2);
console.log(matches2); // [ 'nice', 'nihao' ]
// 匹配时间
var reg2 = /^([01][0-9]|[2][0-3]):[0-5][0-9]$/;
console.log(reg2.test('20:00')); // true
console.log(reg2.test('25:10')); // false
// 匹配边界
// \b 是\w和\W之间的边界
// \B 非边界
console.log('[JS]part_01.class'.replace(/\b/g, '#')); // [#JS#]#part_01#.#class#

// 数字的千位分隔符表示法
var res3 = '112345678 123456'.replace(/(?!\b)(?=(\d{3})+\b)/g, ',');

console.log(res3); // 112,345,678 123,456

function format(num) {
  return num
    .toFixed(2)
    .replace(/\B(?=(\d{3})+\b)/g, ',')
    .replace(/^/, '$$ ');
}

console.log(format(1888)); // $ 1,888.00

// 校验密码
const reg4 = /(?!^[0-9]{6,12}$)(?!^[a-z]{6,12}$)(?!^[A-Z]{6,12}$)^[0-9A-Za-z]{6,12}$/;
console.log(reg4.test('123456')); // false
console.log(reg4.test('a123456')); // true
console.log(reg4.test('asdadasda')); // false
console.log(reg4.test('asdada1sda')); // true
console.log(reg4.test('asdadaAsda')); // true

// 分组引用
// 将2019-07-17转为2017/07/17
var reg5 = /(\d{4})-(\d{2})-(\d{2})/;
var str5 = '2019-07-17';
// reg5.test(str5);
str5.match(reg5);
console.log(RegExp.$1); // 2019
console.log(RegExp.$2); // 07
console.log(RegExp.$3); // 17
str5.replace(reg5, function(match, year, month, day) {
  console.log(`${month}/${day}/${year}`); // 07/17/2019
  return `${month}/${day}/${year}`;
});

// 反向引用
// 匹配2019.07.17 2019-07-17 2019/07/17
var reg6 = /\d{4}(\/|\.|-)\d{2}\1\d{2}/;
console.log(reg6.test('2019-07-17')); // true
console.log(reg6.test('2019-07/17')); // false

// 非捕获括号
