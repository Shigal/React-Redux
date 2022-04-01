// store is going to have all the data management tools
// handle all the react states in this index.js
// import the function createStore from the Redux
// create store needs reducer
import {createStore} from 'redux';

// the reducerFn will be equal to an arrow function, 
// this will contain a state and action as the parameters
const reducerFn = (state = {counter: 0}, action) => {

// now we will give an initial value to the state as is an object,
// it will contain a counter and the value will be zero
// inside that we have to handle the state
    
    if(action.type === "INC") {
        return {counter: state.counter + 1};
    } 
    if(action.type === "DEC") {
        return {counter: state.counter - 1};
    }
    if(action.type === "ADDBY") {
        return {counter: state.counter + action.payload};
    }
    return state;
};

const store = createStore(reducerFn);

export default store;