import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onChange" });

  console.log(isSubmitting);
  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
          Sign UP
        </h1>
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-800"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.name && (
              <p className="text-xs text-red-500">name is required</p>
            )}
          </div>
          <div className="mb-2">
            <label
              htmlFor="username"
              className="block text-sm font-semibold text-gray-800"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              {...register("username", { required: true, pattern: /^[^\s]+$/ })}
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.username && (
              <p className="text-xs text-red-500">
                username is required and cannot include with a space.
              </p>
            )}
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              })}
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.email && (
              <p className="text-xs text-red-500">
                Please enter a valid email address
              </p>
            )}
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: true,
                minLength: 8,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              })}
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.password && (
              <p className="text-xs text-red-500">
                Password must be at least 8 characters long
              </p>
            )}
          </div>
          <div className="mb-2">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-semibold text-gray-800"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword", {
                required: true,
                minLength: 8,
                validate: (value) => value == password,
              })}
              className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.confirmPassword && (
              <p className="text-xs text-red-500">
                Confirm password must be valid and the value must be the same as
                password
              </p>
            )}
          </div>
          <div className="mt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium text-indigo-600 hover:underline"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
