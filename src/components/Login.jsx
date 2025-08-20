import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-slate-950 to-black p-6">
      <div className="w-full max-w-sm rounded-2xl border border-slate-800/80 bg-slate-900/70 backdrop-blur shadow-2xl shadow-blue-900/30 p-8">
        
        {/* Title */}
        <h2 className="text-3xl font-semibold text-center mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
          Login
        </h2>

        {/* Form */}
        <form className="space-y-4">
          {/* Email */}
          <div>
            <label className="text-sm text-slate-300 block mb-1">Email</label>
            <input
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-slate-700/80 bg-slate-800/60 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-600/20"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-slate-300 block mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-slate-700/80 bg-slate-800/60 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-600/20"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full mt-2 rounded-xl bg-blue-600 px-4 py-3 font-medium text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-600/30 active:bg-blue-700"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-xs text-slate-500 text-center mt-4">
          Don’t have an account?{" "}
          <Link 
            to="/Register"
            className="text-blue-400 hover:text-blue-300 underline decoration-blue-400/40"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;