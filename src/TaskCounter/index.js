import React from "react";

function TaskCounter({totalTasks,completedTasks,loading}){

    return(
        <h2 className={`TaskCounter ${!!loading && "TaskCounter--loading"}`}>Tasks completed: {completedTasks}/{totalTasks}</h2>
    );
}
export {TaskCounter};