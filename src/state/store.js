import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import reducer from "./reducer"

// reducers is a function that returns an object
export const store = createStore(reducer, {}, applyMiddleware(thunk)) 