var axios = require('axios');

var URL = 'https://yapi.bytedance.net/mock/6846/tfe/route/getTestParams';

function handleSuccess(data) {
  console.log(data);
}
function handleFailure(data) {
  console.log('error', data);
}

axios.interceptors.request.use(
  function (config) {
    console.log(111, config);
  },
  function (err) {
    console.log(err);
  }
);
// GET
axios.get(URL).then(handleSuccess).catch(handleFailure);
