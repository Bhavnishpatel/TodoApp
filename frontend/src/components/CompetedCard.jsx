import { Card, CardContent } from "./ui/card";


export const CompletedTaskCard = ({ task }) => (
  <Card className="mb-4">
    <CardContent className="p-4 flex gap-4 items-center">
      <img src={task.image} alt="completed" className="w-20 h-20 rounded-lg" />
      <div>
        <h3 className="font-semibold text-md">{task.title}</h3>
        <p className="text-sm text-gray-600">{task.description}</p>
        <p className="text-green-600 text-sm mt-1">Status: {task.status}</p>
        <p className="text-xs text-gray-400">Completed {task.daysAgo} days ago.</p>
      </div>
    </CardContent>
  </Card>
);