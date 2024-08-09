import { useContext, useRef } from "react"
import { FILTER_TASK_BY_COMPLETED, FILTER_TASK_BY_NAME, TasksContext } from "./Exercise_3"


export default function TaskCompleteFilter(){

    const { dispatch } = useContext(TasksContext);

    const filterTasksByCompleted = (value) =>  {
        if (value === 'true') value = true;
        if (value === 'false') value = false;        

        dispatch({type: FILTER_TASK_BY_COMPLETED, payload: value})
        console.log("from TaskCompleteFilter Component filterTasksByCompleted radiobutton value:", value, typeof value);        
    };

    return (
        <>
            <fieldset>
                <legend>Filter by status</legend>
                <label className="filter_by_status">All</label>
                <input type="radio" name="status_filter" value={'not'} onClick={(e) => filterTasksByCompleted(e.target.value)}></input>
                <label className="filter_by_status">Completed</label>
                <input type="radio" name="status_filter" value={true} onClick={(e) => filterTasksByCompleted(e.target.value)}></input>
                <label className="filter_by_status">Not completed</label>
                <input type="radio" name="status_filter" value={false} onClick={(e) => filterTasksByCompleted(e.target.value)}></input>
            </fieldset>
        </>
    )
};