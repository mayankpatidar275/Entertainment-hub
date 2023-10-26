"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Activities from "@/components/activities/activities";
import { FaUser, FaSignOutAlt } from "react-icons/fa"; // Import user and logout icons

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("nothing");
  const [userName, setUserName] = useState("");

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/profile");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    try {
      const res = await axios.get("/api/users/me");
      console.log(res.data);
      setData(res.data.data._id);
      setUserName(res.data.data.username);
    } catch (error) {
      console.log(error, "error yaha aara he");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-4 text-center bg-blue-500 text-white">
        <h1 className="text-4xl font-bold">Entertainment Hub</h1>
        {data !== "nothing" ? ( // Check if user data exists
          <div className="flex justify-center items-center">
            <p className="text-lg text-white-600">Welcome, {userName}</p>
            <div className="ml-4">
              <Link href={`/profile/${data}`}>
                <FaUser size={24} />
              </Link>
            </div>
            <div className="ml-4">
              <button
                onClick={logout}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                <FaSignOutAlt size={24} />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <button className="p-3 m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <Link href="/login">Login</Link>
            </button>
            <button className="p-3 m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <Link href="/signup">Sign Up</Link>
            </button>
          </div>
        )}
      </div>
      <Activities />
    </div>
  );
}
