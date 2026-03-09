import React, { useState } from "react";
import logo from "../assets/logo.png";

function Login() {
  const [signState, setSignState] = useState("Sign In");

  return (
    <div className="login h-screen bg-[url('/background_banner.jpg')] p-5 px-[8%]">
      <img src={logo} alt="" className="login-logo w-40" />

      <div className="login-form w-full max-w-md bg-black rounded-md p-16 mx-auto">
        <h1 className="text-4xl font-bold mb-7 text-white">{signState}</h1>

        <form>
          {signState === "Sign Up" ? (
            <input
              type="text"
              placeholder="Your name"
              className="w-full h-14 bg-[#333] text-white mb-3 outline-none border-none rounded-md p-5 text-base font-bold"
            />
          ) : (
            <></>
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full h-14 bg-[#333] text-white mb-3 outline-none border-none rounded-md p-5 text-base font-bold"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full h-14 bg-[#333] text-white mb-3 outline-none border-none rounded-md p-5 text-base font-bold"
          />

          <button className="w-full border-none outline-none bg-[#e50914] p-4 rounded text-base font-bold mt-5 cursor-pointer text-white">
            {signState}
          </button>

          <div className="form-help flex items-center justify-between text-[#b3b3b3] text-sm mt-5">
            <div className="remember flex items-center gap-1">
              <input type="checkbox" className="w-4 h-4" />
              <label>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        {/* Bottom Switch */}
        <div className="form-switch mt-4 text-[#737373]">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?
              <span
                className="ml-2 text-white font-bold cursor-pointer"
                onClick={() => setSignState("Sign Up")}
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have an account?
              <span
                className="ml-2 text-white font-bold cursor-pointer"
                onClick={() => setSignState("Sign In")}
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
