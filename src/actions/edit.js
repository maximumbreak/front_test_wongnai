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

export const fetchEditReviewsId = (payload, dispatch) => {
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
    .then((json) => dispatch(editReviewsIDSuccess(json)))
    .catch((error) => {
      if (error) dispatch(editReviewsIDFailed(undefined))
    })
}
