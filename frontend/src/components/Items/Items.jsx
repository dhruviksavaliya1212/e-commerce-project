import React from 'react'
import { assets } from '../../assets/assets.js'
import ItemDisplay from '../ItemDisplay/ItemDisplay.jsx'

const Items = ({item_list, url}) => {
  return (
    <div className=' w-full  flex justify-center mt-8'>
      <div className=' w-[95%]'>
        <div className=' w-full grid place-items-center grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3'>
          {
            item_list.map((item,index)=>{
              return(
                <div>
                  <ItemDisplay id={item._id} index={index} name={item.name} image={item.image} oldprice={item.oldprice} newprice={item.newprice} percentage={item.percentage} url={url}/>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Items