import React from 'react';
import {Modal} from '../Modal';
import {TaskContext} from '../TaskContext';
import {TaskCounter} from '../TaskCounter/index.js';
import {TaskSearch} from '../TaskSearch/index.js';
import {TaskList} from '../TaskList/index.js';
import {TaskItem} from '../TaskItem/index.js';
import {TaskButton} from '../TaskButton/index.js';
import { TaskForm } from '../TaskForm';
import '../TaskStyles.css';

function AppUI(){

    const {error,loading,searchedTasks,completeTask,deleteTasks,openModal,setOpenModal} = React.useContext(TaskContext);

    return (
        <React.Fragment >
            <TaskCounter></TaskCounter>
            <TaskSearch></TaskSearch>
            <TaskList>
                {loading && <p>Loading...</p>}
                {error && <p>An error has ocurred...</p>}
                {searchedTasks.map(task => (
                <TaskItem 
                    key={task.text} 
                    text={task.text} 
                    completed={task.completed} 
                    onComplete={() => completeTask(task.text)} 
                    onDelete={() => deleteTasks(task.text)}></TaskItem>
                ))}
            </TaskList>
            <TaskButton setOpenModal={setOpenModal} openModal={openModal}></TaskButton>
            {!!openModal && (
                <Modal>
                    <TaskForm>
                        
                    </TaskForm>
                </Modal>
            )}
        </React.Fragment>
        
    );
}

export {AppUI};