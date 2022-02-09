import Task from "../Task/Task";
import { Droppable } from "react-beautiful-dnd";
import "./Column.css";

const Column = ({ column, tasks }) => {
    return (
        <div className="Column">
            <h2>{column.title}</h2>
            <Droppable droppableId={column.id}>
                {(provider) => (
                    <div {...provider.droppableProps} ref={provider.innerRef} className="task-container">
                        {tasks.map((task, index) => (
                            <Task key={task.id} task={task} index={index} />
                        ))}
                        {provider.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
};

export default Column;
