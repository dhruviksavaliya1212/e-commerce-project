import React from 'react'
import ItemDisplay from '../ItemDisplay/ItemDisplay.jsx'

const Items = ({item_list, url, category, loading}) => {
  return loading ? (
    <div className=" flex w-[100%] justify-center items-center h-[100vh]">
      <div className="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-orange-600"></div>
    </div>
  ): (
    <div className=' w-full  flex justify-center mt-16'>
      <div className=' w-[95%]'>
        <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="500" className=' w-full grid place-items-center grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-3'>
          {
            item_list.map((item,index)=>{
              if ((category === "All" || category === item.category)) {
              return(
                <div key={index}>
                  <ItemDisplay id={item._id} name={item.name} image={item.image} oldprice={item.oldprice} newprice={item.newprice} percentage={item.percentage} url={url}/>
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