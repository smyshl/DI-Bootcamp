# Week 10 Day 3 Exercises XP

Exercise 1: Basic Todo List with React-Redux and Redux Toolkit


Instructions
Step 1: Create a Redux Toolkit Slice

    Create a Todo Slice:
        Use createSlice from Redux Toolkit to define a slice for managing todos.
        Define initial state with an array of todos.
        Include reducers for:
            Adding a todo (addTodo).
            Toggling a todo’s completion status (toggleTodo).
            Removing a todo (removeTodo).

Step 2: Implement Redux Store

    Initialize Store:
        Set up the Redux store using configureStore from Redux Toolkit.
        Include the Todo Slice created in the store’s reducer.


Step 3: Create React Components

    TodoList Component:
        Create a component to display the list of todos.
        Use useSelector hook to access todos from the Redux store state.
        Map through todos to render each todo item.

    AddTodo Component:
        Implement a component to add new todos.
        Use useDispatch hook to dispatch the addTodo action to the Redux store.

    TodoItem Component:
        Build a component to represent individual todo items.
        Include functionality to toggle a todo’s completion status and remove a todo.
        Dispatch actions (toggleTodo, removeTodo) using useDispatch.


Step 4: Connect Components to Redux Store

    Use useSelector and useDispatch:
        Within each React component, use useSelector to access state from the Redux store.
        Dispatch actions using useDispatch to interact with the store.


Step 5: Test Functionality

    Add Todos:
        Test adding new todos using the AddTodo component.
        Ensure new todos are correctly dispatched and added to the Redux store.

    Complete Todos:
        Test toggling the completion status of todos.
        Verify that the completion status is updated in the Redux store.

    Remove Todos:
        Test removing todos using the TodoItem component.
        Confirm that todos are correctly removed from the Redux store.

    Overall Functionality:
        Test the overall functionality of the Todo List by adding, completing, and removing todos to ensure smooth interaction between React components and the Redux store.

By following these steps, you’ll create a basic Todo List application using React-Redux and Redux Toolkit, ensuring proper state management and interaction between React components and the Redux store.


🌟 Exercise 2: Daily Planner Application using React-Redux

Instructions

Create a daily planner application allowing users to manage tasks for specific days. The application should allow users to view tasks for different days, add new tasks, edit existing tasks, and delete tasks.

    Set up a Redux store to manage tasks for different days.
    Create actions and reducers to handle adding, editing, and deleting tasks for each day.
    Implement components to display a calendar or date picker to select days and view tasks for the selected day.
    Create UI elements for adding new tasks, editing existing tasks, and deleting tasks.
    Connect the components to the Redux store for managing tasks.
    Ensure the application updates and displays tasks according to the selected day.
