import React, { createContext, useReducer } from 'react'
import combineReducers from 'react-combine-reducers'
import KeywordsReducer from '../reducers/keyword'
import SelectReducer from '../reducers/select'
import EditReducer from '../reducers/edit'

const initialState = {
  data: null,
  isLoading: false,
  isError: false,
  hasData: false,
}

const initialContext = {}

const store = createContext(initialContext)
const { Provider } = store

const [rootReducerCombined, initialStateCombined] = combineReducers({
  reviews: [KeywordsReducer, initialState],
  select: [SelectReducer, initialState],
  edit: [EditReducer, initialState],
})

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    rootReducerCombined,
    initialStateCombined
  )

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StateProvider }
