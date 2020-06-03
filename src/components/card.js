import React, { useState, useContext } from 'react'
import Modal from './modal'
import Fade from 'react-reveal/Fade'
import * as SelectActions from '../actions/select'
import { store } from '../store/store'

export default ({ id, reviews, setModal, setSelectData }) => {
  const globalState = useContext(store)
  const { dispatch } = globalState
  const onSelect = (id) => {
    dispatch(SelectActions.fetchReviewsId(id, dispatch))
  }
  return (
    <>
      <Fade bottom>
        <div class="w-full">
          <div class="text-gray-700 rounded text-center bg-gray-400 px-4 py-2 m-2">
            <div class="px-6 py-4">
              <div class="flex p-1">
                <div class="flex-1 text-left font-bold text-xl mb-2">
                  ID : {id}
                </div>
                <div class="flex-1 text-right">
                  <button
                    class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                    onClick={() => {
                      setSelectData({ id, reviews })
                      onSelect(id)
                      setModal(true)
                    }}
                  >
                    แก้ไข
                  </button>
                </div>
              </div>

              <p class="text-gray-700 text-base text-left">{reviews}</p>
            </div>
          </div>
        </div>
      </Fade>
    </>
  )
}
