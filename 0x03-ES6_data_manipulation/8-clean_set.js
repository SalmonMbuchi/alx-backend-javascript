export default function cleanSet(aSet, startString) {
  const newSet = new Set();
  if (aSet.has(startString)) {
    return newSet.add(startString);
  }
  return newSet;
}
