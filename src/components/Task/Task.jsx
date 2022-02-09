import { Draggable } from "react-beautiful-dnd";
import "./Task.css";

const Task = ({ task, index }) => {
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provider) => (
                <div className="Task" {...provider.draggableProps} {...provider.dragHandleProps} ref={provider.innerRef}>
                    {task.content}
                    {provider.placeholder}
                </div>
            )}
        </Draggable>
    );
};

export default Task;
