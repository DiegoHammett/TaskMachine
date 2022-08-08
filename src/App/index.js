import React from "react";
import {Modal} from '../Modal';
import {TaskList} from '../TaskList/index.js';
import {TaskItem} from '../TaskItem/index.js';
import {TaskButton} from '../TaskButton/index.js';
import { TaskForm } from '../TaskForm';
import { TaskHeader } from '../TaskHeader';
import {TaskCounter} from '../TaskCounter';
import {TaskSearch} from '../TaskSearch';
import {useTasks} from './useTasks';
import { ChangeAlertWithStorageListener } from "../ChangeAlert";
import '../TaskStyles.css';

function App(props) {
  const {
    error,
    loading,
    searchedTasks,
    completeTask,
    deleteTasks,
    openModal,
    setOpenModal,
    totalTasks,
    completedTasks,
    searchValue,
    setSearchValue,
    addTask,
    sincronizeTasks
  } = useTasks();


  return (
    <React.Fragment > 
        <ChangeAlertWithStorageListener sincronize={sincronizeTasks}/>
        <TaskHeader loading={loading}>
            <TaskCounter totalTasks={totalTasks} completedTasks={completedTasks}></TaskCounter>
            <TaskSearch searchValue={searchValue} setSearchValue={setSearchValue}></TaskSearch>
        </TaskHeader>
        <TaskList
          error={error}
          loading={loading}
          searchedTasks={searchedTasks}
          totalTasks={totalTasks}
          onError={() => <p>An error has ocurred...</p>}
          onLoading={() => <p className='LoadingLabel'>Loading...</p>}
          onEmptyTasks={() => <p className="LoadingLabel">Create your first task</p>}
          onEmptySearch={() => <p className="LoadingLabel">There are no tasks for your search</p>}
        >
          {task => (
            <TaskItem 
                key={task.text} 
                text={task.text} 
                completed={task.completed} 
                onComplete={() => completeTask(task.text)} 
                onDelete={() => deleteTasks(task.text)}>
              </TaskItem>
          )}
        </TaskList>
        <TaskButton setOpenModal={setOpenModal} openModal={openModal}></TaskButton>
        {!!openModal && (
            <Modal>
                <TaskForm addTask={addTask} setOpenModal={setOpenModal}/>
            </Modal>
        )}
    </React.Fragment>
  );
}

export default App;
