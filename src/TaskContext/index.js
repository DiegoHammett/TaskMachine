import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TaskContext = React.createContext();

function TaskProvider(props){

    const {item:tasks,saveItem:saveTasks,loading,error} = useLocalStorage('Tasks_v1',[]);

    const [searchValue,setSearchValue] = React.useState('');

    const [openModal,setOpenModal] = React.useState(false);

    const completedTasks = tasks.filter(task => !!task.completed).length;
    const totalTasks = tasks.length;

    let searchedTasks=[];

    if(!searchValue.length >= 1){
        searchedTasks = tasks;
    }else{
        searchedTasks = tasks.filter(task => {
        const tasksText=task.text.toLowerCase();
        const searchText=searchValue.toLowerCase();
        return tasksText.includes(searchText);
        });
    }

    const completeTask = (text) => {
        const taskIndex = tasks.findIndex(task => task.text === text);
        const newTasks = [...tasks];
        newTasks[taskIndex].completed = !newTasks[taskIndex].completed;
        saveTasks(newTasks);
    };

    const deleteTasks = (text) => {
        const taskIndex = tasks.findIndex(task => task.text === text);
        const newTasks = [...tasks];
        newTasks.splice(taskIndex,1);
        saveTasks(newTasks);
    };

    const addTask = (text) => {
        const newTasks = [...tasks];
        newTasks.push({text,completed:false});
        saveTasks(newTasks);
    };

    return(
        <TaskContext.Provider value={{
            loading,
            error,
            completedTasks,
            totalTasks,
            searchValue,
            setSearchValue,
            searchedTasks,
            completeTask,
            deleteTasks,
            addTask,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TaskContext.Provider>
    );
}

export {TaskContext,TaskProvider}