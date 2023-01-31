export default function updateUniqueItems(items) {
  const newMap = JSON.parse(JSON.stringify(items));
  const setter = ((key, value) => {
    if (value === 1) {
      try {
        newMap.set(key, 100);
      } catch (e) {
        throw Error('Cannot process');
      }
    }
  });
  newMap.forEach(setter);

  return newMap;
}
