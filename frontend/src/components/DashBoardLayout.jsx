import React, { useState } from "react";
import DashBoardHeader from "./DashBoardHeader";
import DashBoardSideBar from "./DashBoardSideBar";
import { ProgressChart } from "./ProgressChart";
import { CompletedTaskCard } from "./CompetedCard";
import {TaskCard} from "./TaskCard"
import { useSelector } from "react-redux";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const user=useSelector((state)=>state.user.user);
  
  const tasks = [
    {
      title: "Attend Nischal’s Birthday Party",
      description:
        "Buy gifts on the way and pick up cake from the bakery. [6 PM | Fresh Elements]",
      priority: "High",
      status: "Not Started",
      date: "20/06/2023",
      image: "https://source.unsplash.com/80x80/?cake",
    },
    {
      title: "Landing Page Design for TravelDays",
      description:
        "Get the work done by EOD and discuss with client before leaving. [4 PM | Meeting Room]",
      priority: "Moderate",
      status: "In Progress",
      date: "20/06/2023",
      image: "https://source.unsplash.com/80x80/?design",
    },
    {
      title: "Presentation on Final Product",
      description:
        "Make sure everything is functioning and all the necessities are properly met. Prepare the team and get the documents ready for review.",
      priority: "Moderate",
      status: "In Progress",
      date: "19/06/2023",
      image: "https://source.unsplash.com/80x80/?presentation",
    },
  ];
  
  const completedTasks = [
    {
      title: "Walk the dog",
      description: "Take the dog to the park and bring treats as well.",
      status: "Completed",
      daysAgo: 2,
      image: "https://source.unsplash.com/80x80/?dog",
    },
    {
      title: "Conduct meeting",
      description: "Meet with the client and finalize requirements.",
      status: "Completed",
      daysAgo: 2,
      image: "https://source.unsplash.com/80x80/?meeting",
    },
  ];


  return (
    <div className="flex">
      <DashBoardSideBar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="flex-1 min-h-screen">
        <DashBoardHeader setIsOpen={setIsSidebarOpen} />
        <main className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">Welcome to your Dashboard {user?.userName}!</h1>
          <p className="text-sm text-gray-600 mt-2">You can manage your tasks here.</p>

          <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h1 className="text-xl font-bold mb-4 text-red-500">To-Do</h1>
              {tasks.map((task, idx) => (
                <TaskCard key={idx} task={task} />
              ))}
            </div>
            <div>
              <h2 className="text-md font-semibold mb-2">Task Status</h2>
              <Card className="mb-6">
                <CardContent className="p-4">
                  <ProgressChart />
                </CardContent>
              </Card>

              <h2 className="text-md font-semibold mb-2">Completed Task</h2>
              {completedTasks.map((task, idx) => (
                <CompletedTaskCard key={idx} task={task} />
              ))}
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
