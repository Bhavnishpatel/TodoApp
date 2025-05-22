import { Link, NavLink } from "react-router-dom";
import React from "react";

const SidebarItem = ({ icon, text, active = false,onClick }) => (
  <Link
    to="#"
    className={`flex items-center px-4 py-2 rounded-md transition-colors ${
      active ? "bg-white text-red-500 font-semibold" : "hover:bg-white/10"
    }`}
    onClick={onClick}
  >
    <span className="mr-3">{icon}</span>
    <span className="text-sm">{text}</span>
  </Link>
);

export default SidebarItem;