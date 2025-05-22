import React from "react";

export const ProgressChart = () => (
  <div className="flex justify-between gap-4 w-full">
    <div className="text-center">
      <div className="text-2xl font-bold text-green-500">84%</div>
      <div className="text-sm">Completed</div>
    </div>
    <div className="text-center">
      <div className="text-2xl font-bold text-blue-500">46%</div>
      <div className="text-sm">In Progress</div>
    </div>
    <div className="text-center">
      <div className="text-2xl font-bold text-red-500">13%</div>
      <div className="text-sm">Not Started</div>
    </div>
  </div>
);
