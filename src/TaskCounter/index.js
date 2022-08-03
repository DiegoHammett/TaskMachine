import React from "react";
import { TaskContext } from "../TaskContext";

function TaskCounter(){

    const {totalTasks,completedTasks} = React.useContext(TaskContext);

    return(
        <h2 className="TaskCounter">Tasks completed: {completedTasks}/{totalTasks}</h2>
    );
}
export {TaskCounter};