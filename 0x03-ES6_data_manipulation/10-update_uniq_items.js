export default function updateUniqueItems(items) {
  const newMap = items.forEach((key, value) => {
    if (value === 1) items.set(key, 100);
  });
  return newMap;
}
