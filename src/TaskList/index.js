import React from "react";

function TaskList({children}){
    return(
        <section>
            <ul>
                {children}
            </ul>
        </section>
    );
}
export {TaskList};