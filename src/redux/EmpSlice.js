import { createSlice } from "@reduxjs/toolkit";

const EmpSlice = createSlice(
    {
        name: 'emp',
        initialState: {
            empData: {
                eid: 101,
                firstName: 'Sonu',
                salary: 50000
            }
        },
        getEmpById: (state, action) => {
            console.log(state);
            state.empData = action.payload;
        }
    }
); 

export const { } = EmpSlice.actions;
export default EmpSlice.reducer;