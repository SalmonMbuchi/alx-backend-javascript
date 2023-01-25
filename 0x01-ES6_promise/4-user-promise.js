export default function signUpUser(firstName, lastName) {
  const obj = { firstName, lastName };
  const promise = Promise.resolve(obj);
  return promise;
}
