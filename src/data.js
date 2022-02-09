import Archer from "./assets/images/cartes/archer.jpg";
import Heritier from "./assets/images/cartes/heritier.jpg";
import Soldat from "./assets/images/cartes/soldat.jpg";
import Embuscade from "./assets/images/cartes/embuscade.jpg";
const initialData = {
    tasks: {
        "card-1": { id: "card-1", content: "Héritier", image: Heritier },
        "card-2": { id: "card-2", content: "Soldat", image: Soldat },
        "card-3": { id: "card-3", content: "Archer", image: Archer },
        "card-4": { id: "card-4", content: "Embuscade", image: Embuscade },
    },
    columns: {
        Plateau: { id: "Plateau", title: "Plateau", taskIds: ["card-1", "card-2", "card-3", "card-4"] },
        Main: { id: "Main", title: "Main", taskIds: [] },
    },
    columnOrder: ["Plateau", "Main"],
};

export default initialData;
