import React from 'react'
import img1 from '../../assets/play_store.png'
import img2 from '../../assets/app_store.png'

const DownloadApp = () => {
  return (
    <div id='app' className=' w-full my-10 flex justify-center '>
      <div className=' w-[95%] h-[20rem] flex flex-col justify-center items-center'>
        <h1 className=' font-bold text-center text-2xl sm:text-3xl'>For Better Experience, Download Our Mobile App</h1>
        <div className=' flex sm:gap-5 gap-2 mt-5'>
          <img src={img1} alt=""  className=' h-10 sm:h-16'/>
          <img src={img2} alt=""  className=' h-10 sm:h-16'/>

        </div>
      </div>
    </div>
  )
}

export default DownloadApp