import * as Action from '../actions/select'

const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case Action.GET_REVIEWS_ID:
      return {
        ...state,
        data: { payload },
        isLoading: true,
        isError: false,
        hasData: false,
      }

    case Action.GET_REVIEWS_ID_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isError: false,
        hasData: true,
      }
    case Action.GET_REVIEWS_ID_FAILED:
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
