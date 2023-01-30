export default function hasValuesFromArray(obj1, obj2) {
  obj2.forEach((element) => {
    return obj1.has(element);
  });
}
