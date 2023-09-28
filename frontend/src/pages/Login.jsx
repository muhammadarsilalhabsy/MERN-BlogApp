import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="flex items-center justify-between px-6 md:px-[200px] py-4 border-b-[1px] shadow-sm">
        {/* logo */}
        <Link to="/" className="flex gap-1">
          <div>
            <img
              src="./black-logo.png"
              alt="logo"
              width={"65px"}
              height={"65px"}
            />
          </div>
          <div>
            <h1 className="text-lg font-medium mt-3">Blog Market</h1>
          </div>
        </Link>

        <Link to="/register">Register</Link>
      </div>

      <div className="w-full flex justify-center items-center h-[70vh]">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
          <h1 className="text-h1">Log in into your account</h1>

          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-full outline-0 border-2 border-black"
          />

          <input
            type="password"
            placeholder="Enter your password"
            className="px-4 py-2 w-full outline-0 border-2 border-black"
          />

          <button className="text-sm md:text-base text-white w-full px-4 py-2 bg-black font-semibold hover:bg-black/90 rounded-md">
            Login
          </button>

          <div className="flex items-center justify-center gap-1 text-sm">
            <p>New Here?</p>
            <Link
              to="/register"
              className="text-gray-400 hover:text-black font-semibold"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
