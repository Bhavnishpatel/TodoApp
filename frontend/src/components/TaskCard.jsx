
export const TaskCard = ({ task }) => {
  const statusColor =
    task.status === "Not Started"
      ? "text-red-500"
      : task.status === "In Progress"
      ? "text-blue-500"
      : "text-green-500";
  return (
    <Card className="mb-4 w-full">
      <CardContent className="p-4 flex gap-4 items-start">
        <img src={task.image} alt="task" className="w-20 h-20 rounded-lg" />
        <div>
          <h2 className="font-bold text-lg mb-1">{task.title}</h2>
          <p className="text-sm text-gray-600 mb-2">{task.description}</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Priority: {task.priority}</span>
            <span className={`${statusColor}`}>Status: {task.status}</span>
          </div>
          <div className="text-xs text-gray-400 mt-1">Created on: {task.date}</div>
        </div>
      </CardContent>
    </Card>
  );
};
