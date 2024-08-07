

const initialState = {value: "Пизда"};


export function myReducer(state = initialState, action) {
    console.log("myReducer state:", state);
    if (action.type === "add") {
    return {
        ...state,
        value: state.value + "+" + action.payload,
    }};
};