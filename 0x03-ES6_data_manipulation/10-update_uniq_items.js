export default function updateUniqueItems(items) {
  const newMap = new Map(items);
  items.forEach((key, value) => {
    try { if (value === 1) { newMap.set(key, 100); } } catch (e) {
      throw Error('Cannot process');
    }
  });
  return newMap;
}
