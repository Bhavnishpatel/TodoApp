import React from "react";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

export default function SocialLogin() {
  return (
    <div className="flex gap-3 mt-4 justify-start">
      <button className="bg-blue-600 text-white px-3 py-2 rounded">
        <FaFacebookF />
      </button>
      <button className="bg-red-500 text-white px-3 py-2 rounded">
        <FaGoogle />
      </button>
      <button className="bg-black text-white px-3 py-2 rounded">
        <FaTwitter />
      </button>
    </div>
  );
}
