import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name : 'Phaniraj'
}//I want the name to be available in the Store and refer it among the components. U can add additional attributes also if required. 

const userSlice = createSlice({
    name : 'user', //generic name for Ur state. 
    initialState, 
    reducers : {
        //list out the functions that U want to perform.
        updateName: (state, action)=>{
            console.log(action.payload)
            state.name = action.payload; //result of UR action. 
        }        
    } 
})
export const { updateName } = userSlice.actions;
export default userSlice.reducer;
