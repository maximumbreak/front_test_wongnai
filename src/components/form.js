import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { store } from '../store/store'
import * as KeywordsActions from '../actions/keyword'

export default ({ setFirstSearch }) => {
  const globalState = useContext(store)
  const { dispatch } = globalState
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = (data) => {
    setFirstSearch(true)
    dispatch(KeywordsActions.fetchKeywords(data, dispatch))
  }

  return (
    <div class="flex w-screen justify-center">
      <form class="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
        <div class="flex items-center border-b border-b-2 border-teal-500 py-2">
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search keyword..."
            aria-label="Search"
            name="search"
            ref={register({ required: true })}
          />
          <button
            class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
            onClick={handleSubmit(onSubmit)}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  )
}
