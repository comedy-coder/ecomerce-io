import React from 'react'
import Grid from './Grid'

const ListTop = () => {
    const toplist = [
    {
        display : "Top all",
        icon : "bx bx-happy-heart-eyes"
    },
    {
        display : "Truyện full",
        icon : "bx bx-like"
        
    },
    {
        display : "Top tháng",
        icon : "bx bx-happy-heart-eyes"
    },
    {
        display : "Yêu thích",
        icon : "bx bx-like"
    },
    {
        display : "Top tuần",
        icon : "bx bx-happy-heart-eyes"
    },
    {
        display : "Mới cập nhật",
        icon : "bx bx-like"
    },
    {
        display : "Top ngày",
        icon : "bx bx-happy-heart-eyes"
    },
    {
        display : "Truyện mới",
        icon :"bx bx-like"
    },
   
]
  return (
    <div className="list-top__list">
        <Grid col={2}
                >
        {toplist.map((item,index) => 
            <div className="list-top__list__item" key = {index}>
                <i className={item.icon}></i>
                {item.display}
            </div>

            )}
</Grid>
    </div>
  )
}

export default ListTop