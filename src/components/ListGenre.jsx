import React from 'react'
import { Link } from 'react-router-dom'
import Grid from './Grid'
const LIstGenre = props => {
    
    const listContent = [
        {   display : "Tất cả" ,
            path : "/"
        },
        {   display : "Action" ,
            path : "/action"
        },
        {   display : "Adult" ,
            path : "/adult"
        },
        {   display : "Adventure" ,
            path : "/adventure"
        },
        {   display : "Anime" ,
            path : "/anime"
        },
        {   display : "Chuyển sinh" ,
            path : "chuyen-sinh"
        },
        {   display : "Comedy" ,
            path : "/comedy"
        },
        {   display : "Echhi" ,
            path : "/ecchi"
        },
        {   display : "Fantasy" ,
            path : "/fantasy"
        },
        {   display : "Genderbeber" ,
            path : "/genderbeber"
        },
        {   display : "Ngôn tinh" ,
            path : "/ngon-tinh"
        },
        {   display : "sliceoflife" ,
            path : "/slice-of-life"
        },
        {   display : "Smut" ,
            path : "/smut"
        },
        {   display : "Oneshot" ,
            path : "/oneshot"
        },
        {   display : "Sports" ,
            path : "/sport"
        },
        {   display : "Horror" ,
            path : "/horror"
        },
        {   display : "Thiếu Nhi" ,
            path : "/thieu-nhi"
        },
        {   display : "Seinen" ,
            path : "/seinen"
        },
        {   display : "Trinh thám" ,
            path : "/trinh-tham"
        },
        {   display : "Live action" ,
            path : "/live-action"
        },
        
    ]
      return (
        
            <div className="genre-list__list">
                <Grid col={4}
                    gap = {10}>


          {
                   listContent.map((item,index) => 
                  
              <div className="genre-list__list__item" key = {index}>
                               
                <Link to ={item.path}>
    
                {item.display}
                </Link>
              </div>
              

              
              )}
                                  </Grid>
            </div>
              
      )
}



export default LIstGenre