import React from "react";

function TaskList(props){
    return(
        <section>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.totalTasks) && props.onEmptyTasks()}
            {(!!props.totalTasks && !props.searchedTasks.length) && props.onEmptySearch()}
            {!props.loading && props.searchedTasks.map(props.children)}
        </section>
    );
}
export {TaskList};