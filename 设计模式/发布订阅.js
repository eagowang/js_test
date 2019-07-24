var events = (function() {
  var topics = {};
  return {
    subscribe(topic, listener) {
      if (!topics[topic]) topics[topic] = [];
      topics[topic].push(listener);
    },
    publish(topic, info) {
      if (!topics[topic]) return;
      topics[topic].forEach(function(cb) {
        cb(info);
      });
    },
    unsubscribe(topic, listener) {
      if (!topics[topic]) return;
      var len = topics[topic].length;
      var i = len - 1;

      while (i >= 0) {
        if (topics[topic][i] === listener) {
          topics[topic].splice(i, 1);
        }
        i--;
      }
    }
  };
})();

function wyc(msg) {
  console.log(`wyc eat ${msg}`);
}

function wss(msg) {
  console.log(`wss eat ${msg}`);
}
events.subscribe("eat", wyc);
events.subscribe("eat", wss);
events.publish("eat", "大餐");

events.unsubscribe("eat", wyc);
events.publish("eat", "大餐");
