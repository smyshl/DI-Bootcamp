

import { TaskInput } from "./TaskInput.jsx";
import { TaskList } from "./TaskList.jsx";


function TaskApp() {


    return (
        <>
            <div>
                <h2 style={{ textDecoration: 'underline' }}>Basic Todo List with React-Redux</h2>
            </div>

            <TaskInput />

            {/* <TaskList /> */}


        </>
    )
};

export default TaskApp;