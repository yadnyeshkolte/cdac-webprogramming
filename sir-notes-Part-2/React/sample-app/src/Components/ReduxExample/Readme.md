# Redux
- Redux is JS library for managing centralized application state. It is used for complex data managementg where multiple components need to share and update the same data. In Real-time apps, Redux ensures predictable state updates and smooth coordiation across the components. 
- It is State management library that can work on JS Framework, but popular in React as React doesnt have its own centralized state management hooks. Later we got context hook and U can replace redux with it.
- Redux provides a single source of truth(called as store) for UR app's state and enforces a strict pattern for updating the state via actions and reducers. 

### CORE CONCEPTS OF REDUX:
- Store: Holds the entire state of the Application. 
- Actions: Plain objects that describe what happened. 
- Reducers: Pure Functions that take the current state and an action and return new state after the action is completed.
- Dispatch : Sends the actions to the store to trigger state changes.

###  Flow diagram:
- [UI component] -> dispatch(action) ->[Action] ->performs the action ->[Reducer] -> [Store] ->[Update the changes/state] -> [UI Component re-render]
- UI Component: ROLE: Displays the data from the Store and triggers actions based on the User interactions. 
- Action : A JS object that tells what happened. Acts like a messenger carrying instructions to the reducer. 
- Reducer: It is a function that takes the arg of current state and action, returns a new state if the state is altered. Example shall be a currentUser gets updated when recieves setCurrentUser state. It contains the logic on how the state gets changed.  
- Store: Holds the entire state tree of the application. created using an API called configureStore() from Redux toolkit.  It is the centralized state container that allows components to subscribe and dispatch actions. 

### APIs used:
- createSlice -> API to combine actions and reducer logic. 
- configureStore -> Creates the Store object
- Provider ->Make the store available to the React app. It is set at the root level, main.jsx file. 
- useDispatch -> Sends actions to the store from the UI. 
- useSelector -> Reads the state from the store. 

### Creating React app with Redux. 
1. Install the Redux Toolkit and React-Redux modules
```
npm install @reduxjs/toolkit react-redux
```
2. Create the Redux slice that represents what U want to work with
3. Create a Redux Store that contains the data that U want to store. 
4. Create Dispatchers and actions for all the operations that U want to perform on the Store. 
5. Use the Redux in UR required components wher U want the state to be displayed/modified. 
