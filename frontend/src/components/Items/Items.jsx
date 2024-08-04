import React from 'react'
import ItemDisplay from '../ItemDisplay/ItemDisplay.jsx'

const Items = ({item_list, url, category}) => {
  return (
    <div className=' w-full  flex justify-center mt-16'>
      <div className=' w-[95%]'>
        <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="500" className=' w-full grid place-items-center grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3'>
          {
            item_list.map((item,index)=>{
              if ((category === "All" || category === item.category)) {
              return(
                <div>
                  <ItemDisplay id={item._id} index={index} name={item.name} image={item.image} oldprice={item.oldprice} newprice={item.newprice} percentage={item.percentage} url={url}/>
                </div>
              )
              }
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Items