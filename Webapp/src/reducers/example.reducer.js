import { handleActions } from 'redux-actions'

export const initialState = { 
  example: {
    text: 'Hello world !',
    api: 'H-API !'
  }
}
// This is the initial state of the store. You need to declare each variable you use even
  // if they are empty at the beginning


export default handleActions({
  EXAMPLE_CONSTANTS: (state, action) => {return {...state, example: {...state.example, text: action.payload}}},
  API: (state, action) => {return {...state, example: {...state.example, api: action.payload}}}
  
}, initialState)
// One Line per action
