import { mainUrl } from '../config/mainUrl'

export const GET_REVIEWS_ID = '[REVIEWS ID] Get Reviews ID'
export const GET_REVIEWS_ID_SUCCESS = '[REVIEWS ID] Get Reviews ID success'
export const GET_REVIEWS_ID_FAILED = '[REVIEWS ID] Get Reviews ID failed'

export const getReviewsID = (payload) => {
  return { type: GET_REVIEWS_ID, payload }
}

export const getReviewsIDSuccess = (payload) => {
  return { type: GET_REVIEWS_ID_SUCCESS, payload }
}

export const getReviewsIDFailed = (payload) => {
  return { type: GET_REVIEWS_ID_FAILED, payload }
}

export const fetchReviewsId = (payload, dispatch) => {
  dispatch(getReviewsID(payload))
  return fetch(`${mainUrl}/reviews/${payload}`, {
    method: 'GET', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      return response.json()
    })
    .then((json) => dispatch(getReviewsIDSuccess(json)))
    .catch((error) => {
      if (error) dispatch(getReviewsIDFailed(undefined))
    })
}
