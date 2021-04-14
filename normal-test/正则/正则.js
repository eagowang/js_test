function printf(str, data) {
  return str.replace(/\{([^\{\}}]*)\}/g, function(match, p) {
    console.log(p);
    return data[p];
  });
}

console.log(printf("wo ai {name} and {skill}", { name: "money", skill: "js" }));
