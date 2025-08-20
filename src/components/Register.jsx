import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [companyName, setCompanyName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [logo, setLogo] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    
  };
 
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-slate-950 to-black p-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-800/80 bg-slate-900/70 backdrop-blur shadow-2xl shadow-blue-900/30 p-8">
        
        {/* Title */}
        <h1 className="text-3xl font-semibold text-center mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
          Register
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid gap-4">
          {/* Company Name */}
          <div>
            <label className="text-sm text-slate-300 block mb-1">Company Name</label>
            <input
              type="text"
              placeholder="Acme Pvt Ltd"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full rounded-xl border border-slate-700/80 bg-slate-800/60 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-600/20"
            />
          </div>

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

          {/* Logo Upload */}
          <div>
            <label className="text-sm text-slate-300 block mb-1">Company Logo</label>
            <div className="relative">
              <input
                type="file"
                onChange={(e) => setLogo(e.target.files[0])}
                className="peer absolute inset-0 h-full w-full cursor-pointer opacity-0"
              />
              <div className="flex items-center justify-between rounded-xl border border-slate-700/80 bg-slate-800/60 px-4 py-3 text-slate-300 transition peer-focus:ring-4 peer-focus:ring-blue-600/20">
                <span className="truncate">
                  {logo ? logo.name : "Upload PNG, JPG, or SVG"}
                </span>
                <span className="rounded-lg bg-blue-600/20 px-3 py-1 text-xs text-blue-300">
                  Choose file
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-1">Max 2MB</p>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mt-2 w-full rounded-xl bg-blue-600 px-4 py-3 font-medium text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-600/30 active:bg-blue-700"
          >
            Register
          </button>

          {/* Footer */}
          <p className="text-xs text-slate-500 text-center">
            Already have an account?{" "}
            <Link
            
              to="/Login"
              className="text-blue-400 hover:text-blue-300 underline decoration-blue-400/40"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;