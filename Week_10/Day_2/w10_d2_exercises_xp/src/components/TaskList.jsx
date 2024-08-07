import { connect } from "react-redux";

import TaskDelete from "./TaskDelete.jsx";
import TaskComplete from "./TaskComplete.jsx";
import TaskEdit from "./TaskEdit.jsx";



export function TaskList(props){
console.log("TaskList props:", props);


    return (
        <div id="taskListWrapper">
            {/* <h3>Tasks List</h3> */}

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
                props.tasks.map((item, index) => {
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


const mapStateToProps = (state) => {
    console.log(state);
    
    return {
        tasks: state.taskReducer.tasks,
    }
};


export default connect(mapStateToProps)(TaskList);