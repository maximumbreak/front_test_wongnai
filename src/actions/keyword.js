import { mainUrl } from '../config/mainUrl'

export const GET_KEYWORD = '[KEYWORD] Get Keyword'
export const GET_KEYWORD_SUCCESS = '[KEYWORD] Get Keyword success'
export const GET_KEYWORD_FAILED = '[KEYWORD] Get Keyword failed'

export const getKeywords = (payload) => {
  return { type: GET_KEYWORD, payload }
}

export const getKeywordsSuccess = (search, payload) => {
  return { type: GET_KEYWORD_SUCCESS, payload, search }
}

export const getKeywordsFailed = (payload) => {
  return { type: GET_KEYWORD_FAILED, payload }
}

export const fetchKeywords = (payload, dispatch) => {
  const { search } = payload
  dispatch(getKeywords(payload))
  return fetch(`${mainUrl}/reviews/?query=${search}`, {
    method: 'GET', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      return response.json()
    })
    .then((json) => dispatch(getKeywordsSuccess(search, json)))
    .catch((error) => {
      if (error) dispatch(getKeywordsFailed(undefined))
    })
}
