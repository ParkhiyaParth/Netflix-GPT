import { useRef, useState } from "react";
import Header from "./Header";
import { checkmsg } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [btn, setBtn] = useState("Sign In");
  const navigate = useNavigate();

  const email = useRef();
  const password = useRef();
  const displayName = useRef();

  const validatemsg = (event) => {
    event.preventDefault();
    const msg = checkmsg(email.current.value, password.current.value);
    // console.log("Validation Message:", msg);
    if (msg === "Valid") {
      // Sign In or Sign Up
      if (!isSignInForm) {
        //Sign Up
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            // console.log("User created:", user);
            updateProfile(user, {
              displayName: displayName.current.value,
              photoURL:
                "https://avatars.githubusercontent.com/u/139553225?v=4&size=64",
            })
              .then(() => {
                navigate("/browse");
              })
              .catch((error) => {
                console.error("Error updating profile:", error);
                setErrorMsg("Error Occured while Signing Up");
              });
          })
          .catch((error) => {
            console.error("Error creating user:", error);
            setErrorMsg("Email already exists Please Sign In");
          });
      } else {
        //Sign IN
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            // console.log("User signed in:", user);
            updateProfile(user, {
              displayName: displayName.current.value,
              photoURL:
                "https://avatars.githubusercontent.com/u/139553225?v=4&size=64",
            })
              .then(() => {
                navigate("/browse");
              })
              .catch((error) => {
                console.error("Error updating profile:", error);
                setErrorMsg("Error Occured while Signing Up");
              });
          })
          .catch((error) => {
            console.error("Error signing in:", error);
            setErrorMsg("Invalid Email or Password");
          });
      }
    } else {
      setErrorMsg("Please enter a valid Email and Password");
    }
  };

  const toggleBtn = (e) => {
    e.preventDefault();
    setisSignInForm(!isSignInForm);
    if (isSignInForm) {
      setBtn("Sign Up");
    } else {
      setBtn("Sign In");
    }
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(0, 0, 0, 0.4), 
            rgba(0, 0, 0, 0.5)
          ),
          url('https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_large.jpg')`,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <Header />
      <div className="flex justify-center items-center h-full">
        <form className="w-4/12 p-12 bg-black bg-opacity-50 rounded-lg">
          <h1 className="text-white text-left mt-2 mx-2 text-3xl mb-8 font-bold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={displayName}
              type="name"
              placeholder="Full Name"
              className="p-2 m-2 w-full bg-gray-700 text-white rounded"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email Address"
            className="p-2 m-2 w-full bg-gray-700 text-white rounded"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-2 m-2 w-full bg-gray-700 text-white rounded"
          />
          <p className="text-red-500 m-2">{errorMsg}</p>
          <button
            className="w-full p-2 m-2 bg-red-600 text-white rounded hover:bg-red-700"
            onClick={validatemsg}
          >
            {btn}
          </button>
          <span className="block text-center text-white mt-4">
            {isSignInForm ? "New To Netflix? " : "Already User? "}
            <b className="text-red-600 cursor-pointer" onClick={toggleBtn}>
              {isSignInForm ? "Sign Up Now" : "Sign In"}.
            </b>
          </span>
          <small className="block text-center text-gray-400 mt-2">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b className="text-blue-500 cursor-pointer">Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
