# Week 10 Day 2 Exercises XP

Exercise 1: Basic Todo List with React-Redux
Instructions

Create a todo list application using React and Redux to manage the state of the todos.

Certainly! Here’s a more detailed set of instructions for creating a basic todo list application using React and Redux:


Setting Up the Redux Store and Actions

1. Initialize a Redux Store:

    Install the necessary packages (redux and react-redux) using npm or yarn.
    Create a Redux store using createStore from Redux.
    Define the initial state for your todo list within the store.

2. Define Actions:

    Create action types for adding a todo, toggling a todo’s completion status, and removing a todo.
    Build action creators for each action type. These functions should return action objects with a type and payload where necessary.


Implementing Reducers

3. Create Reducers:

    Write reducers for each action type defined earlier.
    Handle each action type within the reducers to update the state accordingly.
    Ensure immutability by creating new state objects instead of modifying the existing state.


Developing React Components

4. Design React Components:

    Create components for displaying the list of todos, adding new todos, marking todos as complete, and removing todos.
    Structure the components to interact with the Redux store by dispatching actions through props.

5. Connect Components to Redux Store:

    Use connect from react-redux to connect your React components to the Redux store.
    Map state properties and action dispatchers to the component’s props using mapStateToProps and mapDispatchToProps.

Testing Functionality

6. Test the Application:

    Render the components within your main application container.
    Verify that the todos display correctly and that adding, completing, and removing todos work as expected.
    Dispatch actions from your components to trigger changes in the Redux store and ensure that the UI updates reflect these changes.


Additional Tips:

    Redux DevTools: Consider integrating Redux DevTools Extension to visualize and debug your Redux store state changes.
    Organize Code Structure: Keep your code organized by separating Redux-related files (reducers, actions) from React component files.
    CSS Styling: Apply CSS or styling frameworks to enhance the visual presentation of your todo list application.

Remember to break down each step into smaller tasks and test frequently as you progress through building the application. This approach helps in identifying and fixing issues early in the development process.