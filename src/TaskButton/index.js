import React from "react";

function TaskButton(props){
    const onClickButton = () => {
        props.setOpenModal(!props.openModal);
    };
    return(
        <button className="TaskButton"
            onClick={onClickButton}
        >+
        </button>
    );
}
export {TaskButton};