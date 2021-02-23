function isIDNumberValid(idNumber) {
  var arr = idNumber.split("").map((x) => +x);
  var sum = 0;
  if (idNumber.length !== 13) {
    return false;
  }
  if (
    parseInt(idNumber.slice(2, 4)) < 01 ||
    parseInt(idNumber.slice(2, 4)) > 12
  ) {
    return false;
  }
  if (
    parseInt(idNumber.slice(4, 6)) < 01 ||
    parseInt(idNumber.slice(4, 6)) > 31
  ) {
    return false;
  }
  if (
    parseInt(idNumber.slice(2, 4)) === 02 &&
    parseInt(idNumber.slice(4, 6)) <= 29
  ) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      sum += arr[i];
    }
    if (i % 2 != 0) {
      arr[i] *= 2;
    }
    if (arr[i] >= 9 && i % 2 != 0) {
      arr[i] -= 9;
    }
  }
  return arr.reduce((a, b) => a + b) % 10 == 0;
}
module.exports = { isIDNumberValid };
