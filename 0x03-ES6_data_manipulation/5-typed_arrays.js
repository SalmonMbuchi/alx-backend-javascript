export default function createInt8TypedArray(length, position, value) {
  const buffer = new Int8Array(length, position, value);

  try {
    buffer[position] = value;
  } catch (e) {
    throw Error('Position outside range');
  }
  return buffer;
}
