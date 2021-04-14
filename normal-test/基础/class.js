function wait() {
  return new Promise(resolve => setTimeout(resolve, 10 * 1000));
}

async function main() {
  console.time();
  await wait();
  await wait();
  await wait();
  console.timeEnd();
}

main();
