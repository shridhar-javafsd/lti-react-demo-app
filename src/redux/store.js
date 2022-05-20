
// steps to use redux 
// 1. create store (only one)
// 2. provide the store to index.js
// 3. create slices components (one for each)
// 4. import methods from slices to components 
// 5. send and receive data between store and components  

import { configureStore } from "@reduxjs/toolkit";

console.log(`store initilized...`);

const store = configureStore( 
    {
        reducer: {
            emp: empReducer
            // , more reducers 
        }
    }
);
export default store;

