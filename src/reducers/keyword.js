import * as Action from '../actions/keyword'

const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case Action.GET_KEYWORD:
      return {
        ...state,
        data: { payload },
        isLoading: true,
        isError: false,
        hasData: false,
      }

    case Action.GET_KEYWORD_SUCCESS:
      return {
        ...state,
        data: action.payload,
        search: action.search,
        isLoading: false,
        isError: false,
        hasData: true,
      }
    case Action.GET_KEYWORD_FAILED:
      return {
        ...state,
        data: {},
        isLoading: false,
        isError: true,
        hasData: false,
      }
    default:
      return state
  }
}

export default reducer
