// Simple Function
function addTwoNum() {
  const x = 20;
  const y = 30;
  const z = x + y;
  console.log(z);
}
addTwoNum();

// Parameterized function
function multiplyTwoNum(num1, num2) {
  const result = num1 * num2;
  console.log(result);
}

multiplyTwoNum(20, 30);

// Rest Parameter Function

function restParams(num1, num2, ...num) {
  num.forEach((item, index) => {
    console.log(item, index);
  });
}

restParams(10, 20, 30, 50, 60, 50, 20);

// Anonymous Function

const myFunc = function (...nums) {
  const ans = nums.map((num) => {
    return num * 2;
  });

  return ans;
};

console.log(myFunc(10, 20, 30, 40));
