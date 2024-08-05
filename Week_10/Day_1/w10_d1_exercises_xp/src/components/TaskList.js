import { useContext } from "react"
import { TasksContext } from "./Exercise_3"


export default function TaskList(){
    const { state } = useContext(TasksContext);

        console.log(state);
        

    return (
        <>
            <h3>Tasks List</h3>

            {
                state.tasks.map((item) => {
                    return (
                    <div key={item.id}>{item.name}</div>
                )})
            }
            


        </>
    )
};