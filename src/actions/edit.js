import * as KeywordAction from './keyword'
import { mainUrl } from '../config/mainUrl'

export const EDIT_REVIEWS = '[EDIT REVIEWS ID] Edit Reviews ID'
export const EDIT_REVIEWS_SUCCESS = '[EDIT REVIEWS ID] Edit Reviews ID success'
export const EDIT_REVIEWS_FAILED = '[EDIT REVIEWS ID] Edit Reviews ID failed'

export const editReviewsID = (payload) => {
  return { type: EDIT_REVIEWS, payload }
}

export const editReviewsIDSuccess = (payload) => {
  return { type: EDIT_REVIEWS_SUCCESS, payload }
}

export const editReviewsIDFailed = (payload) => {
  return { type: EDIT_REVIEWS_FAILED, payload }
}

export const fetchEditReviewsId = (payload, dispatch, state) => {
  const { id, reviews } = payload
  dispatch(editReviewsID(payload))
  return fetch(`${mainUrl}/reviews/${id}`, {
    method: 'PUT', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      reviews,
    }),
  })
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      dispatch(editReviewsIDSuccess(json))
      const searchRegExp = new RegExp(state.reviews.search, 'g')
      const replaceWith = `<keyword>${state.reviews.search}</keyword>`
      state.reviews.data
        .filter((items) => items.id == id)
        .map((items) => {
          items.reviews = reviews
          items.reviews = items.reviews.replace(searchRegExp, replaceWith)
        })
      dispatch(
        KeywordAction.getKeywordsSuccess(
          state.reviews.search,
          state.reviews.data
        )
      )
    })
    .catch((error) => {
      if (error) dispatch(editReviewsIDFailed(undefined))
    })
}
