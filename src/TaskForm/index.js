import React from "react";

function TaskForm({addTask,setOpenModal}){

    const [newTask,setNewTask] = React.useState('');

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

    const onKeyDown = (event) => {
        if(event.code === 'Escape'){
            alert('ESCAPE');
        }
    };

    return(
        <form onSubmit={onSubmit} onKeyDown={onKeyDown}>
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