export default function handleResponseFromAPI(promise) {
  return promise.then(() => ({ status: 200, body: 'success' }))
    .catch(() => {
      const err = new Error();
      return (err);
    })
    .finally(() => console.log('Got a response from the API'));
}
