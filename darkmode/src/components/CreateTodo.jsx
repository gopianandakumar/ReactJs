import React from "react";

const CreateTodo = () => {
    const tasks = 0;
    const countTaks = (tasks) => {

        if (tasks === 0) {
            tasks =  "NO taks avilable"
        }
        else {
            tasks = tasks
        }
        console.log(tasks);
       return tasks   
    }
  return (
    <>
      <h1>Tasks:{countTaks()}</h1>
      <button>Add Task</button>
    </>
  );
};

export default CreateTodo;
