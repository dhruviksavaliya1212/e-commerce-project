import React from 'react'
import Banner from '../components/Banner/Banner'
import Services from '../components/Services/Services'
import Explore from '../components/Explore/Explore'
import Items from '../components/Items/Items'
import DownloadApp from '../components/DownloadApp/DownloadApp'

const Home = ({item_list, url}) => {
  return (
    <div className=' w-full pt-16'>
      <Banner/>
      <Services/>
      <Explore/>
      <Items item_list={item_list} url={url}/>
      <DownloadApp/>
      
    </div>
  )
}

export default Home