var nums = [1, 3, 4, 5, 6, 7, 8, 4, 5, 6, 7, 1, 5, 6, 1];

function countingSort(nums) {
  var rank = [];
  for (var num of nums) {
    if (rank[num]) {
      rank[num] = rank[num] + 1;
    } else {
      rank[num] = 1;
    }
  }
  // 对rank求和
  for (var i = 1; i < rank.length; i++) {
    if (!rank[i - 1]) rank[i - 1] = 0;
    if (!rank[i]) rank[i] = 0;
    rank[i] = parseInt(rank[i - 1]) + parseInt(rank[i]);
  }
  var res = [];
  for (var j = nums.length - 1; j >= 0; j--) {
    res[rank[nums[j]]] = nums[j];
    rank[nums[j]] = rank[nums[j]] - 1;
  }
  return res;
}

console.log(countingSort(nums));
