function offWork(cb) {
  console.log("上班ing...");
  setTimeout(function() {
    console.log("下班");
    cb && cb();
  }, 1000);
}

function backHome(cb) {
  console.log("回家ing...");
  setTimeout(function() {
    console.log("到家");
    cb && cb();
  }, 1000);
}

offWork(backHome);
