import { Draggable } from "react-beautiful-dnd";
import "./Carte.css";

const Carte = ({ task, index }) => {
    return (
        <Draggable key={task.id} draggableId={task.id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    isDragging={snapshot.isDragging}
                    className={`Carte ${snapshot.isDragging ? "dragging" : ""}`}
                >
                    <img src={task.image} alt="" />
                </div>
            )}
        </Draggable>
    );
};

export default Carte;
