import React, { useContext } from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { AuthContext } from "../Provider/AuthProvider";

const SocialJoin = () => {
  const { singInGoogle } = useContext(AuthContext);
//   sing in with google
  const handleGoogle = () => {
    singInGoogle().then((result) => {
    // The signed-in user info.
    const user = result.user;
    
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
  });

  };
  return (
    <div>
      <h1 className="font-bold pb-4">Login With</h1>
      <div className="flex flex-col *:w-full space-y-2">
        <div onClick={handleGoogle} className="btn">
          <BsGoogle></BsGoogle> Login with Google
        </div>
        <div className="btn">
          <BsGithub></BsGithub> Login with Github
        </div>
      </div>
    </div>
  );
};

export default SocialJoin;
