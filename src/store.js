
import createStore from 'redux-zero'
const BOARDS =
 [
   { 
      name: 'tes board'
    }
 ]

const initialState = {
    algo: 1
}

const store = createStore (initialState)
export default store