import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Spinner from "../UI/Spinner";

function Teacher() {
  const navigate = useNavigate();
  const [spinner, setSpinner] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  async function submitHandler(event) {
    event.preventDefault();

    try {
      setSpinner(true);
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/teachers/login`,
        {
          email: formData.email,
          password: formData.password,
        }
      );
      if (response.data.data.user.roles !== "teacher") {
        toast.error("Access denied. Only teachers are allowed to log in.");
        setSpinner(false);
        return;
      }
      setSpinner(false);
      const { token } = response.data;
      const name = response.data.data.user.name;
      localStorage.setItem("Teacher jwtToken", token);
      localStorage.setItem("Teacher Name", name);
      navigate("/teacher/dashboard");
      toast.success("Logged in");
    } catch (error) {
      setSpinner(false);
      if (error.response) {
        const errorMessage = error.response.data.message;
        console.error("Error response:", error.response);
        toast.error(errorMessage);
      } else if (error.request) {
        console.error("Error request:", error.request);
        toast.error("No response received from server");
      } else {
        console.error("Error message:", error.message);
        toast.error("Login failed");
      }
    }
  }

  return (
    <>
      {spinner ? (
        <Spinner />
      ) : (
        <section className="bg-gray-100 dark:bg-slate-900  min-h-screen flex items-center justify-center p-8 w-full">
          <div className="bg-white dark:bg-slate-800 dark:text-white dark:border-gray-200 rounded-lg shadow-lg p-8 w-full max-w-md">
            <div className="flex flex-col items-center">
              <h2 className="font-bold text-2xl">Teacher Login</h2>
              <p className="text-sm mt-4">If you are already a member, easy login</p>
              <form className="flex flex-col gap-3 mt-4 w-full" onSubmit={submitHandler}>
                <input
                  className="mt-3 p-2 border rounded dark:bg-slate-700"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={changeHandler}
                  placeholder="Email"
                />
                <input
                  className="mt-3 p-2 border rounded dark:bg-slate-700"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={changeHandler}
                  placeholder="Password"
                />
                <div className="flex mt-4 gap-3 w-full">
                  <input
                    type="submit"
                    value="Login"
                    className="bg-blue-500 text-white p-2 rounded cursor-pointer hover:bg-blue-600 w-full"
                  />
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Teacher;
