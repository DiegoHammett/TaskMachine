import React from "react";
import {AppUI} from './AppUI.js';
import {TaskProvider} from '../TaskContext';


function App(props) {

  return (
    <TaskProvider>
      <AppUI/>
    </TaskProvider>
  );
}

export default App;
