import React, { useContext, useState, useEffect } from 'react'
import Head from './components/head'
import From from './components/form'
import Card from './components/card'
import Modal from './components/modal'
import Loading from './components/loading'
import Noti from './components/noti'
import './styles/main.css'
import { store } from './store/store'

function App() {
  const [firstSearch, setFirstSearch] = useState(false)
  const [modal, setModal] = useState(false)
  const [selectData, setSelectData] = useState()
  const [stateNoti, setStateNoti] = useState(false)
  const globalState = useContext(store)
  const { state } = globalState
  const { reviews, edit } = state

  useEffect(() => {
    if (edit?.data?.nModified) {
      setStateNoti(true)
      setTimeout(() => {
        setStateNoti(false)
      }, 3000)
    }
  }, [edit])

  const renderCardReviews = () => {
    if (!reviews.isLoading && reviews.hasData) {
      return reviews?.data?.map((items) => {
        return (
          <Card
            id={items.id}
            reviews={items.reviews}
            setModal={setModal}
            setSelectData={setSelectData}
          ></Card>
        )
      })
    }
  }

  const renderLoading = () => {
    if (firstSearch) {
      if (reviews.isLoading) {
        return (
          <div className="text-center text-gray-500">
            <Loading></Loading>
          </div>
        )
      } else {
        return (
          <div className="text-center text-gray-500">
            ค้นพบ {reviews?.data?.length ?? 0} รายการ
          </div>
        )
      }
    }
  }

  return (
    <>
      <Head></Head>
      {stateNoti && <Noti></Noti>}
      <div className="bg-gray-100 flex flex-col text-center justify-center text-white p-2">
        <From setFirstSearch={setFirstSearch}></From>
        {renderLoading()}
        {renderCardReviews()}
      </div>
      <Modal
        setModalShow={setModal}
        modalShow={modal}
        selectData={selectData}
      ></Modal>
    </>
  )
}

export default App
