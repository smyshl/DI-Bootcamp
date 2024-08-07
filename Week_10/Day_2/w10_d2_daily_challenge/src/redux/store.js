import { configureStore } from '@reduxjs/toolkit';

import { myReducer } from './reducer.js';

const store = configureStore ({reducer: myReducer})

console.log(store);
