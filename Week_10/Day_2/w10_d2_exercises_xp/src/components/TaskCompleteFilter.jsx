import { connect } from "react-redux";

import { filterTaskByCompleted } from "../redux/actions";


export function TaskCompleteFilter(props){



    const filterTasksByCompletedHandler = (value) =>  {
        if (value === 'true') value = true;
        if (value === 'false') value = false;        

        props.filterTaskByCompleted(value)
        // console.log("from TaskCompleteFilter Component filterTasksByCompletedHandler radiobutton value:", value, typeof value);        
    };

    return (
        <>
            <fieldset>
                <legend>Filter by status</legend>
                <label className="filter_by_status">All</label>
                <input type="radio" name="status_filter" value={'not'} onClick={(e) => filterTasksByCompletedHandler(e.target.value)}></input>
                <label className="filter_by_status">Completed</label>
                <input type="radio" name="status_filter" value={true} onClick={(e) => filterTasksByCompletedHandler(e.target.value)}></input>
                <label className="filter_by_status">Not completed</label>
                <input type="radio" name="status_filter" value={false} onClick={(e) => filterTasksByCompletedHandler(e.target.value)}></input>
            </fieldset>
        </>
    )
};


const mapDispatchToProps = (dispatch) => {
    return {
        filterTaskByCompleted: (val) => dispatch(filterTaskByCompleted(val)),
    };
};


export default connect(null, mapDispatchToProps)(TaskCompleteFilter);