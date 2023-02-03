export default function cleanSet(aSet, startString) {
  const strings = [];

  if (startString === '' || typeof startString !== 'string') return '';
  aSet.forEach((str) => {
    if (typeof str === 'string' && str.startsWith(startString)) {
      strings.push(str.slice(startString.length));
    }
  });
  return strings.join('-');
}
