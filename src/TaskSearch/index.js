import React from "react";

function TaskSearch({searchValue,setSearchValue,loading}){
    
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return(
        <input 
            placeholder="Search Tasks" 
            className="TaskSearch" 
            value={searchValue}
            onChange={onSearchValueChange}
            disabled={loading}    
        ></input>
    );
}
export {TaskSearch};