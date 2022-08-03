import React from "react";
import { TaskContext } from "../TaskContext";

function TaskForm(){

    const [newTask,setNewTask] = React.useState('');
    const {addTask} = React.useContext(TaskContext);
    const {setOpenModal} = React.useContext(TaskContext);

    const onSubmit = (event) => {
        event.preventDefault();
        addTask(newTask);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTask(event.target.value);
    };

    return(
        <form onSubmit={onSubmit}>
            <label>Add a new task</label>
            <textarea value={newTask} onChange={onChange}>
            </textarea>
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button--add" type="submit" onClick={onSubmit}>
                    Add
                </button>
                <button className="TodoForm-button TodoForm-button--cancel" type="button" onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </form>
    );
}

export {TaskForm};