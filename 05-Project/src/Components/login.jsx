import React, { useContext, useState } from "react";
import usercontext from "../context/usercontext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(usercontext);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser({
      email,
      password,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="w-[350px] bg-white p-8 rounded-xl shadow-lg">

        <h1 className="text-2xl font-bold text-center mb-2">
          Login
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Login to your account
        </p>

        <form onSubmit={handleSubmit}>

          <label className="block font-semibold mb-2">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-3 py-3 border border-gray-300 rounded-lg mb-5 outline-none focus:border-black"
          />

          <label className="block font-semibold mb-2">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-3 py-3 border border-gray-300 rounded-lg mb-6 outline-none focus:border-black"
          />

          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;