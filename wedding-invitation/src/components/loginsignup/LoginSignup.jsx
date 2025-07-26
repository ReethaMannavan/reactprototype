import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupRePassword, setSignupRePassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.from || "/";
  const loggedInUserEmail = localStorage.getItem("loggedInUser");


  const validateEmail = (email) => /^\S+@\S+\.\S+$/.test(email);
  const validatePassword = (password) => password.length >= 6;

  // ✅ Signup Logic
  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(signupEmail)) return setError("Enter a valid email.");
    if (!validatePassword(signupPassword)) return setError("Password must be at least 6 characters.");
    if (signupPassword !== signupRePassword) return setError("Passwords do not match.");

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.some((user) => user.email === signupEmail);

    if (userExists) {
      setError("User already registered. Please login.");
      setIsLogin(true);
      return;
    }

    const newUser = { email: signupEmail, password: signupPassword };
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("loggedInUser", signupEmail);

    navigate(redirectPath, { replace: true });
  };

  // ✅ Login Logic
  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(loginEmail)) return setError("Enter a valid email.");
    if (!validatePassword(loginPassword)) return setError("Password must be at least 6 characters.");

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === loginEmail);

    if (!user) {
      setError("User not registered. Please signup first.");
      setIsLogin(false);
      return;
    }

    if (user.password !== loginPassword) {
      setError("Incorrect password.");
      return;
    }

    localStorage.setItem("loggedInUser", loginEmail);
    navigate(redirectPath, { replace: true });
  };


 


  return (
    <div className="min-h-screen bg-[#E6E6FA] flex items-center justify-center px-4">
      <div className="w-full max-w-[700px] bg-white p-8 rounded shadow-md border border-gray-300">
        <div className="w-full max-w-md mx-auto">
          <div className="mb-6 text-center">
            <button
              className={`px-4 py-2 font-semibold text-lg ${
                isLogin ? "text-red-600 border-b-2 border-red-600" : "text-gray-500"
              }`}
              onClick={() => {
                setIsLogin(true);
                setError("");
              }}
            >
              Login
            </button>
            <button
              className={`ml-8 px-4 py-2 font-semibold text-lg ${
                !isLogin ? "text-red-600 border-b-2 border-red-600" : "text-gray-500"
              }`}
              onClick={() => {
                setIsLogin(false);
                setError("");
              }}
            >
              Signup
            </button>
          </div>

          {error && (
            <div className="mb-4 text-center text-red-600 font-semibold">{error}</div>
          )}

          {isLogin ? (
            <form onSubmit={handleLogin} noValidate>
              <h2 className="text-2xl font-semibold mb-6 text-center">
                Login to My Account
              </h2>

              <label htmlFor="loginEmail" className="block mb-1 font-medium text-gray-700">
                Email
              </label>
              <input
                id="loginEmail"
                type="email"
                placeholder="Enter Email id"
                className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-red-400"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />

              <label htmlFor="loginPassword" className="block mb-1 font-medium text-gray-700">
                Password
              </label>
              <input
                id="loginPassword"
                type="password"
                placeholder="Enter Password"
                className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-red-400"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />

              <button
                type="submit"
                className="w-full bg-red-600 text-white font-semibold py-2 rounded hover:bg-red-700 transition"
              >
                Login
              </button>

              <div className="mt-4 text-right">
                <a href="#" className="text-red-600 hover:underline text-sm">
                  Forget Password?
                </a>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSignup} noValidate>
              <h2 className="text-2xl font-semibold mb-6 text-center">
                New User Signup Now
              </h2>

              <label htmlFor="signupEmail" className="block mb-1 font-medium text-gray-700">
                Email
              </label>
              <input
                id="signupEmail"
                type="email"
                placeholder="Enter Email"
                className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-red-400"
                required
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
              />

              <label htmlFor="signupPassword" className="block mb-1 font-medium text-gray-700">
                Password
              </label>
              <input
                id="signupPassword"
                type="password"
                placeholder="Enter Password"
                className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-red-400"
                required
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
              />

              <label htmlFor="signupRePassword" className="block mb-1 font-medium text-gray-700">
                Re-enter Password
              </label>
              <input
                id="signupRePassword"
                type="password"
                placeholder="Re-enter Password"
                className="w-full border border-gray-300 rounded px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-red-400"
                required
                value={signupRePassword}
                onChange={(e) => setSignupRePassword(e.target.value)}
              />

              <button
                type="submit"
                className="w-full bg-red-600 text-white font-semibold py-2 rounded hover:bg-red-700 transition"
              >
                Signup
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
