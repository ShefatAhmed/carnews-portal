"use client";

import GoogleLogin from "@/components/GoogleLogin";
import useAuth from "@/hooks/useAuth";
import { useRouter, useSearchParams } from "next/navigation";
import { startTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { signIn } = useAuth();
    const search = useSearchParams();
    const from = search.get("redirectUrl") || "/";
    const { replace, refresh } = useRouter();

    const onSubmit = async (data) => {
        const { email, password } = data;
        const toastId = toast.loading("Loading...");
        try {
            await signIn(email, password);
            startTransition(() => {
                refresh();
                replace(from);
                toast.dismiss(toastId);
                toast.success("User signed in successfully");
            });
        } catch (error) {
        }
    };

    return (
        <div className="my-16">
  <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
    <h1 className="my-5 text-2xl font-extrabold text-center text-gray-800">Login Now</h1>
    <div className="mb-4">
      <label htmlFor="email" className="block text-gray-700 text-sm font-medium">Email</label>
      <input
        type="email"
        placeholder="Email"
        id="email"
        name="email"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        autoComplete="email"
        {...register("email", {
          required: true,
          pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
        })}
      />
      {errors.email && (
        <span className="text-red-500 text-xs mt-1">
          Please enter a valid email address.
        </span>
      )}
    </div>
    <div className="mb-4">
      <label htmlFor="password" className="block text-gray-700 text-sm font-medium">Password</label>
      <input
        type="password"
        placeholder="Password"
        id="password"
        name="password"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        autoComplete="new-password"
        {...register("password", { required: true, minLength: 6 })}
      />
      {errors.password && (
        <span className="text-red-500 text-xs mt-1">
          Please enter a password.
        </span>
      )}
    </div>
    <div className="mb-6">
      <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" type="submit">
        Login
      </button>
    </div>
    <p className="text-sm text-center text-gray-800">
      Don't have an account?
      <a href="/signup" className="text-blue-500 ml-1">
        Sign Up
      </a>
    </p>
    <div className="mt-6 border-t pt-4 text-center text-gray-600 text-sm">
      OR
    </div>
    <GoogleLogin from={from} />
  </form>
</div>
    );
};

export default LoginPage;