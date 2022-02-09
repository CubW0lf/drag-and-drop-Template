import { useEffect, useState } from "react";
import initialData from "../../data.js";
import Column from "../../components/Column/Column";
import { DragDropContext } from "react-beautiful-dnd";
import "./Tasks.css";

const Tasks = () => {
    const [datas, setDatas] = useState(initialData);

    useEffect(() => {
        setDatas(initialData);
    }, []);

    const onDragEnd = (result) => {
        const { source, destination, draggableId } = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        const start = datas.columns[source.droppableId];
        const finish = datas.columns[destination.droppableId];

        if (start === finish) {
            const column = datas.columns[source.droppableId];
            const newTaskIds = Array.from(column.taskIds);

            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...column,
                taskIds: newTaskIds,
            };

            const newState = {
                ...datas,
                columns: {
                    ...datas.columns,
                    [newColumn.id]: newColumn,
                },
            };

            setDatas(newState);

            return;
        }

        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStart = {
            ...start,
            taskIds: startTaskIds,
        };

        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds,
        };

        const newState = {
            ...datas,
            columns: {
                ...datas.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },
        };

        setDatas(newState);
    };

    return (
        <div className="Tasks">
            <DragDropContext onDragEnd={onDragEnd}>
                {datas?.columnOrder.map((columnId) => {
                    const column = datas.columns[columnId];
                    const tasks = column.taskIds.map((taskId) => datas.tasks[taskId]);

                    return <Column key={column.id} column={column} tasks={tasks} />;
                })}
            </DragDropContext>
        </div>
    );
};

export default Tasks;
