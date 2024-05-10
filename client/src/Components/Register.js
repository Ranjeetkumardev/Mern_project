import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import signupService from "./signupService";

const Register = () => {
  const [isloggedIn, setIsloggedIn] = useState(false);
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  
  const handleSignUp = async () => {
    try {
      const formDataToSend = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };
      const response = await signupService.signup(formDataToSend);
    localStorage.setItem("token", response.token);
    navigate("/");
      window.location.reload();
    } catch (error) {
      console.error("Error during sign up:", error);
      setErrors([...errors, error]);
       setFormData({
        name: "",
        email: "",
        password: "",
       });
      
    }
  };

  const handleLogin = async () => {
    try {
      const formDataToSend = {
        email: formData.email,
        password: formData.password,
      };
      const response = await signupService.login(formDataToSend);
      localStorage.setItem("token", response.token);
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.error("Error during login:", error);
      setErrors([...errors, error]);
       setFormData({
        email: "",
        password: "",
       });
    
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isloggedIn) {
      handleLogin();
    } else {
      handleSignUp();
    }
  };

  const toggleSignInForm = () => {
    setIsloggedIn(!isloggedIn);
  };
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-1/3 border border-green-400 rounded-lg mt-8 bg-black p-8 text-white"
      >
        <h1 className="font-bold text-2xl py-4">
          {isloggedIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isloggedIn && (
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Full Name"
            className="p-2 my-2 w-full rounded bg-gray-800"
            required
            minLength="3"
            maxLength="12"
          />
        )}
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Email Address"
          className="p-2 my-2 w-full rounded bg-gray-800"
          required
        />
        <input
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          placeholder="Password"
          className="p-2 my-2 w-full rounded bg-gray-800"
          minLength="6"
          maxLength="12"
          required
        />
        {errors &&
          errors.map((error, index) => (
            <p key={index} className="text-red-500 w-full text-xl">
              {error.message}
            </p>
          ))}

        <button
          type="submit"
          className="p-2 my-2 bg-green-600 text-white w-full rounded"
        >
          {isloggedIn ? "Sign In" : "Sign Up"}
        </button>

        <p onClick={toggleSignInForm} className="cursor-pointer my-3">
          {isloggedIn
            ? "New to Our website? Sign Up now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </section>
  );
};

export default Register;
