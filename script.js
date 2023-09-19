const sumOfTwoNumbers = (nums, target) => {
  const numIndices = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    if (numIndices[complement] !== undefined) {
      return [numIndices[complement], i];
    }

    numIndices[num] = i;
  }

  return [];
};

const nums = [2, 7, 11, 15];
const target = 9;
const result = sumOfTwoNumbers(nums, target);
console.log(result);
