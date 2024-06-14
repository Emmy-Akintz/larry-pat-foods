import { IconContext } from "react-icons";
import { FaHome, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import Input from "./components/Input";

function Loginpage() {
  const { user } = useAuthContext();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { login, error, isLoading } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  useEffect(() => {
    if (user) {
      if (user.user.role === "manager") {
        navigate("/manager-dashbord");
      } else if (user.user.role === "admin") {
        navigate("/admin-dashbord");
      } else if (user.user.role === "client") {
        navigate("/");
      }
    }
  }, [user]);

  return (
    <div className="min-h-screen md:logsign py-2 px-2 bg-gray-200 lg:flex lg:flex-col lg:justify-around">
      <Link to="/">
        <div className="p-4 bg-green-500 hover:bg-green-300 w-12 rounded-full md:rounded translate-y-20 md:translate-y-0 translate-x-4 md:translate-x-0">
          <IconContext.Provider value={{ color: "white" }}>
            <FaHome />
          </IconContext.Provider>
        </div>
      </Link>
      <br />
      <form
        action="/"
        className="rounded-xl w-[300px] md:w-[400px] lg:w-[700px] lg:h-[550px] md:m-auto p-4 bg-[rgb(110,189,138)] pb-1"
        onSubmit={handleSubmit}
      >
        <h1 className="font-bold text-xl lg:text-5xl uppercase border-b-2 pb-4">
          Login
        </h1>
        <br />
        <Input
          type="email"
          id="email"
          label="Email: "
          classes=" font-bold text-2xl"
          stater={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          id="password"
          label="Password: "
          classes="font-bold text-2xl"
          stater={(e) => setPassword(e.target.value)}
        />
        <br />
        <div className="flex justify-center items-center pt-4 md:pt-6">
          <p className="mr-3 md:mr-4 lg:mr-8 xl:mr-10 font-semibold text-red-600 lg:text-3xl">
            Clear form?
          </p>
          <button
            type="reset"
            title="Clear form"
            className="bg-red-500 p-2 md:p-3 rounded text-white lg:p-5 lg:rounded-md"
          >
            <FaTimes />
          </button>
        </div>
        <br />
        <button
          type="submit"
          disabled={isLoading}
          className={
            isLoading
              ? "bg-green-300 hover:bg-green-400 transition-all py-2 px-6 font-semibold rounded-3xl text-white text-base mb-6 lg:py-5 lg:px-14  lg:rounded-3xl lg:text-2xl"
              : "bg-green-500 hover:bg-green-400 transition-all py-2 px-6 font-semibold rounded-3xl text-white text-base mb-6 lg:py-5 lg:px-14  lg:rounded-3xl lg:text-2xl"
          }
        >
          LOGIN
        </button>
        <div className="error text-red-500">
          {error && <div className="error">{error}</div>}
        </div>
        <p className="  border-t-gray-200 border-t-2 pt-6 mb-6 lg:text-2xl">
          Forgot Your{" "}
          <Link
            to="/forgotPass"
            className="text-green-700 font-bold md:hover:underline underline underline-offset-4"
          >
            PASSWORD?
          </Link>
        </p>
      </form>
      <div className="bg-[rgb(110,189,138)] mt-4 md:mt-10 md:mb-4 rounded-md py-6 px-2 font-semibold w-[300px] md:w-[400px] lg:w-[700px] md:m-auto md:rounded-xl">
        <p>Don't have an account?</p>
        <p>
          Sign Up{" "}
          <Link
            to="/signup"
            className="text-green-700 font-bold md:hover:underline underline underline-offset-4"
          >
            HERE
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Loginpage;
