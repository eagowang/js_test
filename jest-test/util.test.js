import { sum } from './util';

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// test('adds 2 + 3 to equal 5', () => {
//   expect(sum(2, 3)).toBe(5);
// });

// test('object assignment', () => {
//   const data = { one: 1 };
//   data['two'] = {
//     second: 2,
//   };
//   expect(data).toEqual({
//     one: 1,
//     two: {
//       second: 2,
//     },
//   });
// });

// test('add positive numbers is  not zero', () => {
//   for (let a = 1; a < 10; a++) {
//     for (let b = 1; b < 10; b++) {
//       expect(a + b).not.toBe(0);
//     }
//   }
// });

// test('null', () => {
//   const n = null;
//   expect(n).toBeNull();
//   expect(n).toBeDefined();
//   expect(n).not.toBeUndefined();
//   expect(n).not.toBeTruthy();
//   expect(n).toBeFalsy();
// });

// test('zero', () => {
//   const z = 0;
//   expect(z).not.toBeNull();
//   expect(z).toBeDefined();
//   expect(z).not.toBeUndefined();
//   expect(z).not.toBeTruthy();
//   expect(z).toBeFalsy();
// });

// expect.extend({
//   toBeWithinRange(received, floor, ceiling) {
//     const pass = received >= floor && received <= ceiling;
//     if (pass) {
//       return {
//         message: () =>
//           `expected ${received} not to be within range ${floor} - ${ceiling}`,
//         pass: true,
//       };
//     } else {
//       return {
//         message: () =>
//           `expected ${received} to be within range ${floor} - ${ceiling}`,
//         pass: false,
//       };
//     }
//   },
// });

// test('numeric ranges', () => {
//   expect(100).toBeWithinRange(90, 110);
//   expect(101).not.toBeWithinRange(0, 100);
//   expect({ apples: 6, bananas: 3 }).toEqual({
//     apples: expect.toBeWithinRange(1, 10),
//     bananas: expect.not.toBeWithinRange(11, 20),
//   });
// });

// function fetchData(callback) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       callback && callback('peanut butter');
//       // resolve('peanut butter');
//       reject('error: mistake');
//     }, 1000);
//   });
// }

// test('the data is peanut butter', (done) => {
//   function callback(data) {
//     try {
//       expect(data).toBe('peanut butter');
//       done();
//     } catch (e) {
//       done(e);
//     }
//   }

//   fetchData(callback);
// });

// test('the data is peanut butter', () => {
//   expect.assertions(1);
//   return fetchData()
//     .then((data) => {
//       expect(data).toBe('peanut butter');
//     })
//     .catch((e) => expect('data').toMatch('error'));
// });

// test('the data is peanut butter', () => {
//   return expect(fetchData()).resolves.toBe('peanut butter');
// });

// test('the fails with an error', () => {
//   return expect(fetchData()).rejects.toMatch('error');
// });

// test('the data is peanut butter', async () => {
//   const data = await fetchData();
//   expect(data).toBe('peanut butter');
// });

// test('the data is peanut butter', async () => {
//   await expect(fetchData()).rejects.toMatch('error');
// });

// beforeEach(() => {
//   console.log('before');
// });

// afterEach(() => {
//   console.log('after');
// });

// beforeAll(() => {
//   console.log('before all');
// });

// afterAll(() => {
//   console.log('after all');
// });

// describe('test scope', () => {
//   beforeAll(() => {
//     console.log('before scope all');
//   });
//   afterAll(() => {
//     console.log('after scope all');
//   });
//   test('scope 1', () => {
//     expect(1).toBe(1);
//   });
//   test('scope 1', () => {
//     expect(2).toBe(2);
//   });
// });

// test('this will be the only test that runs', () => {
//   expect(false).toBe(false);
// });
// Mock functions 允许测试代码之间的关系，通过删除函数实际实现，捕获函数调用及参数传递
// 捕获用new初始化的实例，允许返回测试时配置

function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

const mockCallback = jest.fn((x) => 42 + x);
forEach([0, 1], mockCallback);
test('test mock functions', () => {
  expect(mockCallback.mock.calls.length).toBe(2);
  expect(mockCallback.mock.calls[0][0]).toBe(0);
  expect(mockCallback.mock.calls[1][0]).toBe(1);
  expect(mockCallback.mock.results[0].value).toBe(42);
});

// .mock property
// const myMock = jest.fn();
// const a = new myMock();
// const b = {};

// const bound = myMock.bind(b);
// bound();

// console.log(myMock.mock.instances);

// Mock Return Values
// const myMock = jest.fn();
// console.log(myMock());
// myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);
// console.log(myMock(), myMock(), myMock(), myMock());

// const filterTestFn = jest.fn();
// filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);
// const result = [11, 12].filter((num) => filterTestFn(num));
// console.log(result);
// console.log(filterTestFn.mock.calls);

// Mocking Modules
import { getGeneralInfo } from './tool';
jest.mock('./tool');
// console.log(getGeneralInfo);
test('should fetch users', () => {
  // getGeneralInfo.mockReturnValue({ did: 'xxx' });
  getGeneralInfo.mockImplementation(() => {
    return {
      did: 'xxx',
    };
  });
  console.log(getGeneralInfo());
  expect(getGeneralInfo()).toEqual({ did: 'xxx' });
});

// Mock Implementations
