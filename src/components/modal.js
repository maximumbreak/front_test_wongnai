import React, { useState, useContext } from 'react'
import { store } from '../store/store'
import { useForm } from 'react-hook-form'
import * as EditActions from '../actions/edit'
import * as KeywordActions from '../actions/keyword'

export default ({ setModalShow, modalShow, selectData }) => {
  const globalState = useContext(store)
  const { dispatch, state } = globalState
  const { register, handleSubmit, watch, errors } = useForm()

  const { select, reviews } = state

  const onSubmit = (data) => {
    const payload = {
      id: select?.data?.id,
      reviews: data.edit,
    }
    dispatch(EditActions.fetchEditReviewsId(payload, dispatch))
    dispatch(KeywordActions.fetchKeywords({ search: reviews.search }, dispatch))
    setModalShow(false)
  }

  if (modalShow) {
    return (
      <div class="flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-800">
        <div class="bg-white rounded-lg w-1/2">
          <div class="flex flex-col items-start p-4">
            <div class="flex items-center w-full">
              <div class="text-gray-900 font-medium text-lg">
                แก้ไข ID : {select?.data?.id}
              </div>
              <svg
                onClick={() => setModalShow(false)}
                class="ml-auto fill-current text-gray-700 w-6 h-6 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 18"
              >
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
              </svg>
            </div>
            <hr></hr>
            <form class="w-full" onSubmit={handleSubmit(onSubmit)}>
              <div class="flex items-center border-b border-b-2 border-teal-500 py-2">
                <textarea
                  rows="10"
                  class="autoexpand tracking-wide h-50 py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200  border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="แก้ไข"
                  aria-label="Search"
                  name="edit"
                  defaultValue={select?.data?.reviews}
                  ref={register({ required: true })}
                />
              </div>
            </form>
            <hr></hr>
            <div class="ml-auto">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-1"
                onClick={handleSubmit(onSubmit)}
              >
                Submit
              </button>
              <button
                class="bg-transparent hover:bg-gray-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={() => setModalShow(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return <></>
}
