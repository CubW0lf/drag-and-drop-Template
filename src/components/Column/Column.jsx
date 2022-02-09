import Carte from "../Carte/Carte";
import { Droppable } from "react-beautiful-dnd";
import "./Column.css";

const Column = ({ column, tasks }) => {
    return (
        <div className="Column">
            <h2>{column.title}</h2>
            <Droppable droppableId={column.id} direction="horizontal">
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={`task-container ${snapshot.isDraggingOver ? "draggingOver" : ""}`}
                    >
                        {tasks.map((task, index) => (
                            <Carte key={task.id} task={task} index={index} />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
};

export default Column;
