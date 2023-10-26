"use client";
import React from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const GetStarted = () => {
  const router = useRouter();
  const moveToProfilePage = async () => {
    try {
      router.push("/profile");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <button className="p-3" onClick={moveToProfilePage}>
        Get Started
      </button>
    </div>
  );
};

export default GetStarted;
