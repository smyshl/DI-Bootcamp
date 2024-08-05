import { useContext } from "react"
import { TasksContext } from "./Exercise_3.js"
import TaskDelete from "./TaskDelete.js";


export default function TaskList(){
    const { state } = useContext(TasksContext);

    return (
        <>
            <h3>Tasks List</h3>
            {
                state.tasks.map((item) => {
                    return (
                    <div key={item.id}>{item.name}
                    <TaskDelete id={item.id}/>
                    </div>                    
                )})
            }
        </>
    )
};