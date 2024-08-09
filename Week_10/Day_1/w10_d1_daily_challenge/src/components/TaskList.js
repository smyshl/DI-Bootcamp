import { useContext, useEffect } from "react"
import { TasksContext } from "./Exercise_3.js"
import TaskDelete from "./TaskDelete.js";
import TaskComplete from "./TaskComplete.js";
import TaskEdit from "./TaskEdit.js";


const filterByName = (_tasks, _name) => {
    const filteredTasks = _tasks.filter((item) => item.name.toLowerCase().includes(_name.toLowerCase()));
    return filteredTasks; 
};


const filterByCompleted = (_tasks, _status) => {
    const filteredTasks = _tasks.filter((item) => item.completed === _status);
    return filteredTasks; 
};


export default function TaskList(){
    const { state } = useContext(TasksContext);
    let filteredTasks = [...state.tasks];

    if (state.filterByName != '') filteredTasks = filterByName(state.tasks, state.filterByName)

    if (state.filterByCompleted != 'not') filteredTasks = filterByCompleted(state.tasks, state.filterByCompleted)

    return (
        <div id="taskListWrapper">

            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th id="tableHeaderName">Name</th>
                        <th>Completed</th>
                        <th id="tableHeaderEdit">Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                {
                filteredTasks.map((item, index) => {
                    return (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td className="tableNameCol">{item.name}</td>
                        <td><TaskComplete props={{id: item.id, completed: item.completed}} /></td>
                        <td><TaskEdit props={{id: item.id, name: item.name}}/></td>
                        <td><TaskDelete id={item.id}/></td>
                    </tr>                    
                )})
                }

                </tbody>
            </table>

        </div>
    )
};