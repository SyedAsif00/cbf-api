import { auth } from "./firebase.config"; // Make sure the path to firebase-config is correct
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const createUser = async (username, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
      username
    );
    const user = userCredential.user;
    await updateProfile(user, {
      displayName: username,
    });
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default createUser;
