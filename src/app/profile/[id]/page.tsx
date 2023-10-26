import React from 'react';
import Link from "next/link";

const UserProfile = ({ params }: any) => {
  // Get username and email from params

  return (
    <div className="bg-white shadow-md rounded-lg p-6">

      <div className="text-blue-500 hover:underline ml-4 mt-4 absolute left-0 top-0">
            <Link href="/">
              Back to Home
            </Link>
      </div>

      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <div>
        <p className="text-lg mb-2">
          UserId: <span className="text-blue-600">{params.id}</span>
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
