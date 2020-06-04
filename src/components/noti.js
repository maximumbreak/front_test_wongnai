import React from 'react'

export default () => {
  return (
    <div
      class="fixed z-50 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-darkest px-4 py-3 shadow-md my-2 right-0 m-1"
      role="alert"
    >
      <div class="flex">
        <svg
          class="h-6 w-6 text-teal mr-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
        </svg>
        <div>
          <p class="font-bold">Success</p>
          <p class="text-sm">อัพเดทข้อมูลเรียบร้อย</p>
        </div>
      </div>
    </div>
    // <div class="absolute p-8 bg-white w-full max-w-md m-auto flex flex-col right-0 fixed block">
    //   <div class="z-40 shadow-lg rounded-lg bg-white mx-auto m-8 p-4 notification-box flex">
    //     <div class="pr-2">
    //       <svg
    //         class="fill-current text-green-600"
    //         xmlns="http://www.w3.org/2000/svg"
    //         viewBox="0 0 24 24"
    //         width="22"
    //         height="22"
    //       >
    //         <path
    //           class="heroicon-ui"
    //           d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
    //         />
    //       </svg>
    //     </div>
    //     <div>
    //       <div class="text-sm pb-2">Update Success</div>
    //     </div>
    //   </div>
    // </div>
  )
}
