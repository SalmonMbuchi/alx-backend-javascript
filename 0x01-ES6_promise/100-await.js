import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    const obj = {
      photo,
      user,
    };

    return obj;
    // return Promise.all([photo, user]).then((val) => console.log(val));
  } catch (err) {
    return (err);
  }
}
