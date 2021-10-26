import React from "react";

function Task({task}:{task:any}){
    const { id,title,completed}=task;
    const h1=<h1>{title}</h1>;
    const text=completed ? <h6>{title}</h6>:h1;
    return <div data-testid={`task-${id}`}> {text}</div>
}
export default Task;