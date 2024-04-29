import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.config";

const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("Logged in user:", user);
    return user;
  } catch (error) {
    console.error("Authentication error:", error);
    throw error;
  }
};

export default loginUser;
