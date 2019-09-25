// const cheerio = require("cheerio");
// const https = require("https");
// const fs = require("fs");

// https.get(
//   "https://mmbiz.qpic.cn/mmbiz_jpg/yZPTcMGWibvuHiaU5V5Z0O3rtL1an5NCwFkibMw2uA5WjRTWGiaw6S35iayKXbsz2zLicbhiaHd9z6IMRk9lybEGOAHdw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",
//   res => {
//     console.log(res);
//     res.pipe(fs.createWriteStream("index.png"));
//   }
// );
// const { Writable } = require("stream");
// const outStream = new Writable({
//   write(chunk, encoding, callback) {
//     console.log(chunk.toString());
//     callback();
//   }
// });
const chalk = require("chalk");
const { Duplex, Transform } = require("stream");
const https = require("https");
const COS = require("cos-nodejs-sdk-v5");

const CONFIG = {
  bucket: "rabbitpre-test-1251517970",
  region: "ap-guangzhou",
  prefix: "rp/test",
  secretId: "AKIDztgNtEkWP7kBcgmUCzmPr8JI8EE274LQ",
  secretKey: "Rnzzc8UecP2U7vZ1IZhUQNCrKb58BFWr",
  ignoreFormats: ""
};
async function uploadFile(file) {
  try {
    const { bucket, region, prefix, secretId, secretKey } = CONFIG;
    const cos = new COS({
      SecretId: secretId,
      SecretKey: secretKey,
      FileParallelLimit: 3
    });
    const transformStream = new Transform({
      transform(chunk, encoding, callback) {
        callback(null, chunk);
      }
    });
    https.get(file.path, res => {
      res.pipe(transformStream);
    });
    let p = new Promise(resolve => {
      cos.putObject(
        {
          Bucket: bucket,
          Region: region,
          Key: prefix ? `${prefix}/${file.name}` : file.name,
          Body: transformStream
        },
        (err, data) => {
          if (err) {
          } else {
            const cdnUrl = `https://${data.Location}`;
            // 异步设置图片缓存redis，不用同步
            resolve(cdnUrl);
            console.info(chalk.green(cdnUrl));
            console.info(chalk.green(JSON.stringify(data)), "\n");
          }
        }
      );
    });
    return await p;
  } catch (err) {
    console.error(chalk.red(err));
  }
}

uploadFile({
  name: "xxx.png",
  path:
    "https://mmbiz.qpic.cn/mmbiz_jpg/yZPTcMGWibvuHiaU5V5Z0O3rtL1an5NCwFkibMw2uA5WjRTWGiaw6S35iayKXbsz2zLicbhiaHd9z6IMRk9lybEGOAHdw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"
});
