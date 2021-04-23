var axios = require('axios');


// axios.get('https://cloudapi.bytedance.net/faas/services/tt2nms/invoke/getVersion',{
//   params: {
//     "appid": "tt257f63c28a555a39"
//   }
// }).then(res=>{
//   console.log(res.data)
// })
const compareVersion = function (
  version1,
  version2
) {
  const arr1 = version1.split('.'); //分割字符串
  const arr2 = version2.split('.');
  console.log(11)
  if(arr1.length !== 3 || arr2.length !== 3){
    throw new Error('invalid version')
  }
  let data1 = 0,
    data2 = 0;
    const map = {
      0: 'major',
      1: 'minor',
      2: 'patch'
    }
  for (let i = 0; i < 3; i++) {
    data1 = parseInt(arr1[i]) || 0;
    data2 = parseInt(arr2[i]) || 0;
    if (data1 < data2) {
      return -1;
    } else if (data1 > data2) {
      return 1;
    }
  }
  return 0;
};

compareVersion('1.2.1', '1.2.2')
