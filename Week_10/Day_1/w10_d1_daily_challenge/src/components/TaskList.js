import { useContext } from "react"
import { TasksContext } from "./Exercise_3.js"
import TaskDelete from "./TaskDelete.js";
import TaskComplete from "./TaskComplete.js";


export default function TaskList(){
    const { state } = useContext(TasksContext);

    return (
        <>
            <h3>Tasks List</h3>

            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Completed</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                {
                state.tasks.map((item, index) => {
                    return (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td><TaskComplete props={{id: item.id, completed: item.completed}} /></td>
                        <td>-</td>
                        <td><TaskDelete id={item.id}/></td>
                    </tr>                    
                )})
            }

                </tbody>


            </table>


            {/* {
                state.tasks.map((item) => {
                    return (
                    <div key={item.id}>{item.name}
                    <TaskDelete id={item.id}/>
                    </div>                    
                )})
            } */}
        </>
    )
};