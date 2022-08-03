import React from "react";
import { TaskContext } from "../TaskContext";

function TaskSearch(){

    const {searchValue,setSearchValue} = React.useContext(TaskContext);
    
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return(
        <input 
            placeholder="Search Tasks" 
            className="TaskSearch"
            value={searchValue}
            onChange={onSearchValueChange}    
        ></input>
    );
}
export {TaskSearch};