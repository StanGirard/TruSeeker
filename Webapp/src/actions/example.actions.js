import * as constants from '../constants/example.constants'
import { createActions } from 'redux-actions'

// this is the name of the function that dispatches an action 
export const {
  exampleConstants  
} = createActions({},
  constants.EXAMPLE_CONSTANTS 
  
)


// this is the actions that will be created by exampleConstants
// If your function is call functionConstant -> Your action is FUNCTION_CONSTANT

// Actions can also be created like this ->


export function addTodo(text) {
  return { type: constants.ADD_TODO, text }
}
// with the type being the name of the actions and the payload being the variable after it.


// Or like this
export const addTodo2 = (text) => ({
  type: constants.EXAMPLE_CONSTANTS,
  payload: {
    un: 'Hello',
    deux: 'World !'
    // There can be as many objects as you want
  }
})


// Async function call with middleware feature -> Advanced feature ( Not for now )

export const fetchAPI = () => ({
  type: constants.API,
  payload: {
    url: 'http://whatthecommit.com/index.txt',
    success: exampleConstants

  }
})
