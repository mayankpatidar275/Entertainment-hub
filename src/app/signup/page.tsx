"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed", error.message);

      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      
      <div className="text-blue-500 hover:underline ml-4 mt-4 absolute left-0 top-0">
        <Link href="/">
          Back to Home
        </Link>
      </div>
      
      <h1 className="text-3xl font-semibold mb-4">{loading ? "Processing" : "Signup"}</h1>
      <hr className="w-20 border-t border-gray-600 mb-4" />

      <div className="w-64">
        <label htmlFor="username" className="block mb-2 font-semibold">Username</label>
        <input
          id="username"
          type="text"
          className="w-full p-2 border rounded-md focus:ring focus:ring-gray-400"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="Username"
        />

        <label htmlFor="email" className="block mt-4 mb-2 font-semibold">Email</label>
        <input
          id="email"
          type="text"
          className="w-full p-2 border rounded-md focus:ring focus:ring-gray-400"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email"
        />

        <label htmlFor="password" className="block mt-4 mb-2 font-semibold">Password</label>
        <input
          id="password"
          type="password"
          className="w-full p-2 border rounded-md focus:ring focus:ring-gray-400"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Password"
        />

        <button
          onClick={onSignup}
          className={`w-full p-2 mt-6 border rounded-md focus:ring focus:ring-gray-400 ${
            buttonDisabled ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          disabled={buttonDisabled}
        >
          {loading ? "Processing..." : "Signup"}
        </button>

        <p className="text-gray-600 mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Visit login page
          </Link>
        </p>
      </div>
    </div>
  );
}
