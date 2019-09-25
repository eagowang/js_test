// 实现一个div滑动的动画，由快至慢5s结束(不准用css3)
// 开始时间
// 触发时间
// 速度范围
function animate(id, time) {
  // 开始时间
  var timeStart = Date.now();
  var el = document.getElementById(id);
  var speed = 5;
  function raf() {
    var timeTrigger = Date.now();
    // 0
    // 5
    if (timeTrigger - timeStart < time * 1000) {
      var innerSpeed = Math.floor(
        (1 - (timeTrigger - timeStart) / time / 1000) * speed
      );
      var left = el.style.left ? parseInt(el.style.left) : 0;
      el.style.left = left + innerSpeed + "px";
      window.requestAnimationFrame(raf);
    }
  }
  window.requestAnimationFrame(raf);
}
animate("test", 5);
