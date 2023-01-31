export default function hasValuesFromArray(obj1, obj2) {
  const every = ((elem) => obj1.has(elem));
  return obj2.every(every);
}
