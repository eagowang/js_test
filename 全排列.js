var permute = function(nums) {
  var list = [];
  var tempList = [];

  function dfs(list, tempList, nums) {
    if (tempList.length === nums.length) {
      list.push(tempList.concat());
    } else {
      for (var i = 0; i < nums.length; i++) {
        if (tempList.indexOf(nums[i]) > -1) continue;
        tempList.push(nums[i]);
        dfs(list, tempList, nums);
        tempList.pop();
      }
    }
  }
  dfs(list, tempList, nums);
  return list;
};

console.log(permute([1, 2, 3]));
