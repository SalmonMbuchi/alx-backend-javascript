export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    const value = array[idx];
    this.array[idx] = appendString + value;
  }

  return array;
}
