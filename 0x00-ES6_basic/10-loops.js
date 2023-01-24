export default function appendToEachArrayValue(array, appendString) {
  const obj = [];
  let idx = 0;
  for (const value of array) {
    obj[idx] = appendString + value;
    idx += 1;
  }
  return obj;
}
