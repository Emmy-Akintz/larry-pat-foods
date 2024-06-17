import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FaHome, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSignup } from "../hooks/useSignup";
import Input from "../components/Input";

export default function Signuppage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { signup, isLoading, error } = useSignup();
  // setTimeout(() => {
  //     setError("")
  // }, 3000)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(firstName, lastName, email, password);
  };

  return (
    <div className="md:logsign px-2 pr-2 md:px-4 md:py-12 pb-8  md:p-4 bg-gray-300 h-[120vh] md:h-[125vh] text-black">
      <Link to="/">
        <div className="p-4 bg-green-500 hover:bg-green-300 w-12 rounded-full md:rounded translate-y-20 md:translate-y-0 translate-x-4 md:translate-x-0 xl:w-[5.6vw] xl:h-[8vh] xl:rounded-full xl:flex xl:justify-center xl:items-center">
          <IconContext.Provider value={{ color: "white", size: "2.6vh", }}>
            <FaHome />
          </IconContext.Provider>
        </div>
      </Link>
      <div className="lg:flex lg:flex-col lg:h-fit">
        <form
          action="/"
          className="rounded-xl sm:w-[300px] md:w-[500px] xl:w-[45vw] pb-4 md:m-auto px-4 bg-[rgb(132,192,151)]"
          onSubmit={handleSubmit}
        >
          <h1 className="font-bold text-xl lg:text-[3.45vh] uppercase border-b-2 py-4 border-gray-200 xl:py-8 md:font-semibold">
            signup page
          </h1>
          <br />
          <Input
            label="First Name: "
            type="text"
            id="first_name"
            classes=" font-semibold lg:text-xl xl:text-[1.6vh] xl:h-[3vh]"
            stater={(e) => setFirstName(e.target.value)}
          />
          <br className=" select-none" />
          <Input
            label="Last value: "
            type="text"
            id="last_name"
            classes="font-semibold lg:text-xl xl:text-[1.6vh] xl:w-[12vw] xl:h-[3vh]"
            stater={(e) => setLastName(e.target.value)}
          />
          <br className=" select-none" />
          <Input
            type="email"
            id="email"
            classes="font-semibold lg:text-xl xl:text-[1.6vh] xl:w-[12vw] xl:h-[3vh]"
            label="Email: "
            stater={(e) => setEmail(e.target.value)}
          />
          <br className=" select-none" />
          <Input
            type="password"
            id="password"
            label="Password: "
            classes="font-semibold lg:text-xl xl:text-[1.6vh] xl:w-[12vw] xl:h-[3vh]"
            stater={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-center items-center pt-4 md:pt-6">
            <p className="mr-3 md:mr-4 lg:mr-8 xl:mr-10 font-semibold text-red-600 lg:text-[2.54vh]">
              Clear form?
            </p>
            <button
              type="reset"
              title="Clear form"
              className="bg-red-500 p-2 md:p-3 rounded text-white xl:p-[1.2vh] xl:rounded-md"
            >
              <FaTimes />
            </button>
          </div>
          <br />
          <div className="error text-red-500">
            {error && <div className="error">{error}</div>}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={
              isLoading
                ? "bg-green-300 hover:bg-green-400 transition-all py-2 px-6 font-semibold rounded-3xl text-white text-base mb-6 xl:py-[2.0vh] xl:px-[3.22vw]  xl:rounded-[24px] xl:text-[2.25vh]"
                : "bg-green-500 hover:bg-green-400 transition-all py-2 px-6 font-semibold rounded-3xl text-white text-base mb-6 lg:py-[2.0vh] lg:px-[3.22vw]  xl:rounded-[24px] lg:text-[2.25vh]"
            }
          >
            SIGN UP
          </button>
        </form>
        <div className="bg-[rgb(132,192,151)] mt-4 md:mt-10 md:mb-4 rounded-md py-6 px-2 font-semibold w-[300px] md:w-[500px] xl:w-[45vw] md:m-auto md:rounded-xl lg:text-[2.4vh] lg:h-[12vh]">
          <p>Already have an Account?</p>
          <p className="font-semibold">
            Login{" "}
            <Link
              to="/login"
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
