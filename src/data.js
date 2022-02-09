const initialData = {
    tasks: {
        "task-1": { id: "task-1", content: "Faire Mon Sport" },
        "task-2": { id: "task-2", content: "Regarder le Tuto de dnd" },
        "task-3": { id: "task-3", content: "Charger mon Tel" },
        "task-4": { id: "task-4", content: "Faire à Manger" },
    },
    columns: {
        "column-1": { id: "column-1", title: "Taches à faire", taskIds: ["task-1", "task-2", "task-3", "task-4"] },
        "column-2": { id: "column-2", title: "Taches en cours", taskIds: [] },
        "column-3": { id: "column-3", title: "Taches terminées", taskIds: [] },
    },
    columnOrder: ["column-1", "column-2", "column-3"],
};

export default initialData;
