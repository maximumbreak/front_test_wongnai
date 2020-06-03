import * as Action from '../actions/edit'

const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case Action.EDIT_REVIEWS:
      return {
        ...state,
        data: { payload },
        isLoading: true,
        isError: false,
        hasData: false,
      }

    case Action.EDIT_REVIEWS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isError: false,
        hasData: true,
      }
    case Action.EDIT_REVIEWS_FAILED:
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
