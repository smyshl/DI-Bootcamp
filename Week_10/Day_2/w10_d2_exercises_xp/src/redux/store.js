import { configureStore } from '@reduxjs/toolkit';

import taskReducer from './reducer.js';

const store = configureStore ({
    reducer: {
        taskReducer,
    },
});

export default store;

