import {
  signInwithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInwithGooglePopup();
    const data = await createUserDocumentFromAuth(user);
    console.log(data);
  };

  return (
    <>
      <h1>Halaman Signin</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </>
  );
};

export default SignIn;
