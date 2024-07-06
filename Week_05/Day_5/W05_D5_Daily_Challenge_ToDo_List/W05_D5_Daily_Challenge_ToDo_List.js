const tasks = [];
const _form = document.getElementById("add_new_task");
const _tasks_place = document.getElementsByClassName("listTasks")[0];



function _add_element(value){
    let icon = document.createElement("span");
    let check_el = document.createElement("input");
    let lable_el = document.createElement("label");
    let _hr = document.createElement("hr")

    icon.setAttribute("class", "material-symbols-outlined");
    icon.textContent = "delete_forever";

    check_el.setAttribute("type", "checkbox");
    check_el.setAttribute("name", value);
    // check_el.setAttribute("value", 'no');

    lable_el.setAttribute("for", value);
    lable_el.textContent = value;

    _tasks_place.appendChild(icon);
    _tasks_place.appendChild(check_el);
    _tasks_place.appendChild(lable_el);
    _tasks_place.appendChild(_hr);

    _form.reset();

};



function addTask(e){
    e.preventDefault();
    const _task_name = e.target.firstElementChild.value.trim()
    if (_task_name){
        tasks.push(_task_name);
        _add_element(_task_name);
    };
};

_form.addEventListener("submit", addTask);