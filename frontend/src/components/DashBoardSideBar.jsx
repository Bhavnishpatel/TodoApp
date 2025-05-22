import React from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  AlertCircle,
  ClipboardCheck,
  List,
  Settings,
  HelpCircle,
  LogOut
} from "lucide-react";
import SidebarItem from "./SideBarItem";
import { useDispatch, useSelector } from "react-redux";
import { setTab } from "../app/actions/navSlice";

const DashBoardSideBar = ({ isOpen, setIsOpen }) => {
  const tab=useSelector((state)=>state.nav.tab);
  const user=useSelector((state)=>state.user.user);
  const dispatch=useDispatch();

  return (
    <div
      className={`fixed sm:max-h-full md:static top-0 left-0 z-50 max-h-full bg-red-400 text-white w-64 p-4 shadow-lg transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
    >
      <button 
        onClick={() => setIsOpen(false)} 
        className="md:hidden absolute top-4 right-4 text-white"
      >
        ✖
      </button>
      <div className="flex flex-col items-center mb-8 mt-6 md:mt-0">
        <img
          src="https://i.pravatar.cc/100"
          alt="Profile"
          className="w-20 h-20 rounded-full border-4 border-white"
        />
        <h2 className="mt-3 font-semibold text-lg">{user.userName}</h2>
        <p className="text-sm text-white/80">{user.email}</p>
      </div>
      <nav className="flex-1 space-y-4 mt-4">
        <SidebarItem 
        icon={<LayoutDashboard size={20} />} 
        text="Dashboard" to={"/dashboard"} 
        active={tab=="dashboard"} 
        onClick={()=>dispatch(setTab("dashboard"))}
        />
        <SidebarItem 
        icon={<AlertCircle size={20} />} 
        text="Vital Task" 
        active={tab=="vitalTask"}
        to={"/vitalTask"} 
        onClick={()=>dispatch(setTab("vitalTask"))}
        />
        <SidebarItem 
        icon={<ClipboardCheck size={20} />} 
        text="My Task" 
        to={"/myTask"} 
        active={tab=="myTask"}
        onClick={()=>dispatch(setTab("myTask"))}
        />
        <SidebarItem 
        icon={<List size={20} />} 
        text="Task Categories" 
        to={"/taskCategories"} 
        active={tab=="categories"}
        onClick={()=>dispatch(setTab("categories"))}
        />
        <SidebarItem 
        icon={<Settings size={20} />} 
        text="Settings" 
        to={"/setting"}
        active={tab=="settings"}
        onClick={()=>dispatch(setTab("settings"))}
        />
        <SidebarItem 
        icon={<HelpCircle size={20} />} 
        text="Help" 
        to={"/help"} 
        active={tab=="help"}
        onClick={()=>dispatch(setTab("help"))}
        />
      </nav>
      <div className="mt-auto pt-6">
        <SidebarItem 
        icon={<LogOut size={20} />} 
        text="Logout" 
        to={"/logout"} 
        active={tab=="logout"}
        onClick={()=>dispatch(setTab("logout"))}
        />
      </div>
    </div>
  );
};



export default DashBoardSideBar;
