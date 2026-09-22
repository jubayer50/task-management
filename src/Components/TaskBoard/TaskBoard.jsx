import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";

const defaultTask = {
  id: crypto.randomUUID(),
  title: "Learn React Native",
  description:
    "I want to Learn React such than I can treat it like my slave and make it do whatever I want to do",
  tags: ["web", "react", "js"],
  priority: "High",
  isFavorite: false,
};

const TaskBoard = () => {
  const [tasks, setTasks] = useState([defaultTask]);
  const [showModal, setShowModal] = useState(false);
  const [updateToTask, setUpdateToTask] = useState(null);

  const handleAddTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        }),
      );
    }

    setShowModal(false);
  };

  const handleUpdateTask = (updateTask) => {
    setUpdateToTask(updateTask);
    setShowModal(true);
  };

  return (
    <section className="mb-20" id="tasks">
      {showModal && (
        <AddTaskModal
          onSave={handleAddTask}
          updateToTask={updateToTask}
        ></AddTaskModal>
      )}

      <div className="container mx-auto px-6 md:px-8">
        {/* Search Box */}
        <div className="p-2 flex justify-end">
          <SearchTask></SearchTask>
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction onAddingTask={() => setShowModal(true)}></TaskAction>

          <TaskList tasks={tasks} onEdit={handleUpdateTask}></TaskList>
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
