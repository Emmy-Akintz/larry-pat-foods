import { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { FaHome, FaTimes } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogin } from "../hooks/useLogin";
import Input from "./components/Input";

export default function Loginpage() {
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
    <div className="min-h-screen md:logsign py-2 px-2 bg-gray-200">
      <Link to="/">
        <div className="p-4 bg-green-500 hover:bg-green-300 w-12 rounded-full md:rounded translate-y-20 md:translate-y-0 translate-x-4 md:translate-x-0 xl:w-[6vw] xl:h-[8vh] xl:rounded-2xl xl:flex xl:justify-center xl:items-center">
          <IconContext.Provider value={{ color: "white", size: "2.6vh", }}>
            <FaHome />
          </IconContext.Provider>
        </div>
      </Link>
      <br />
      <div className="lg:flex lg:flex-col lg:justify-center lg:min-h-[70vh]">
        <form
          action="/"
          className="rounded-xl sm:w-[300px] md:w-[400px] xl:w-[40vw] max-2xl:h-[50vh]  xl:h-[43vh] md:m-auto px-4 bg-[rgb(132,192,151)]"
          onSubmit={handleSubmit}
        >
          <h1 className="font-bold text-xl text-[3.6vh] uppercase border-b-2 py-4 border-gray-200 xl:py-8 xl:font-semibold">
            Login
          </h1>
          <br />
          <Input
            type="email"
            id="email"
            label="Email: "
            classes=" font-semibold lg:text-xl xl:text-[1.6vh] xl:w-[12vw] xl:h-[3vh]"
            stater={(e) => setEmail(e.target.value)} />
          <br />
          <Input
            type="password"
            id="password"
            label="Password: "
            classes="font-semibold lg:text-xl xl:text-[1.6vh] xl:w-[12vw] xl:h-[3vh]"
            stater={(e) => setPassword(e.target.value)} />
          <br />
          <div className="flex justify-center items-center pt-4 md:pt-6">
            <p className="mr-3 md:mr-4 lg:mr-8 xl:mr-10 font-semibold text-red-600 xl:text-[2.4vh]">
              Clear form?
            </p>
            <button
              type="reset"
              title="Clear form"
              className="bg-red-500 p-2 md:p-3 rounded text-white xl:p-[1.2vh] xl:rounded-md"
              onClick={password ? null : ""}
            >
              <FaTimes />
            </button>
          </div>
          <br />
          <button
            type="submit"
            disabled={isLoading}
            className={isLoading
              ? "bg-green-300 hover:bg-green-400 transition-all py-2 px-6 font-semibold rounded-3xl text-white text-base mb-6 xl:py-[2.0vh] xl:px-[3.22vw]  xl:rounded-[24px] xl:text-[2.25vh]"
              : "bg-green-500 hover:bg-green-400 transition-all py-2 px-6 font-semibold rounded-3xl text-white text-base mb-6 xl:py-[2.0vh] xl:px-[3.22vw]  xl:rounded-[24px] xl:text-[2.25vh]"}
          >
            LOGIN
          </button>
          <div className="error text-red-500">
            {error && <div className="error">{error}</div>}
          </div>
          <p className="  border-t-gray-200 border-t-2 pt-6 mb-6 xl:text-[2.25vh] xl:font-semibold">
            Forgot Your{" "}
            <Link
              to="/forgotPass"
              className="text-green-700 font-bold md:hover:underline underline underline-offset-4"
            >
              PASSWORD?
            </Link>
          </p>
        </form>
        <div className="bg-[rgb(110,189,138)] mt-4 md:mt-10 md:mb-4 rounded-md py-6 px-2 font-semibold w-[300px] md:w-[400px] xl:w-[40vw] md:m-auto md:rounded-xl xl:text-[2vh] xl:h-[10vh]">
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
    </div>
  );
}