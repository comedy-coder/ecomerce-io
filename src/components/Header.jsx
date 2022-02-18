import React from 'react'
import logo from '../assets/images/logo.png'
import ToogleButton from './ToogleButton'
import { Link } from 'react-router-dom'
import LIstGenre from './ListGenre'
import ListTop from './ListTop'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'

const Header = () => {
    const mainNav = [
       
        { 
             display : "bx bx-home",
             path : "/",
             
        },
        { 
             display : "HOT",
             path : "/hot",
             
        },
       
        { 
             display : "THEO DÕI",
             path : "/theo-doi"

        },
        { 
             display : "LỊCH SỬ",
             path : "/lich-su"

        },
        { 
             display : "THỂ LOẠI",
             path : "/the-loai",
             icon: "bx bxs-down-arrow",
           
        },
        { 
             display : "XẾP HẠNG",
             path : "/xep-hang",
             icon: "bx bxs-down-arrow",
             iconup :"bx bxs-up-arrow",
        },
        { 
             display : "TÌM TRUYỆN",
             path : "/tim-truyen"

        },
        { 
             display : "CON TRAI",
             path : "/con-trai"

        },
        { 
             display : "CON GÁI",
             path : "/con-gai"

        },
        { 
             display : "GROUP",
             path : "/group"

        },
    ]
    const [darkMode,setdarkMode] = useState(false);
    useEffect(() => {
        if(darkMode)
        { headerRef.current.style.backgroundColor = "black"; 
        }
        else{
            headerRef.current.style.backgroundColor = "white";
        }
    },[darkMode]);
    const headerRef = useRef(null);
    const {pathname} = useLocation();
    const activeNav = mainNav.findIndex(e=>e.path === pathname)
  return (
      <div className="header" ref={headerRef}>
    <div className="header__bar "  style={{ 

        
        backgroundImage: `url("http://s.nettruyengo.com/Data/Sites/1/skins/comic/images/bg_header_2017.jpg") `,
        backgroundRepeat :  'no-repeat',
        backgroundPosition : 'top center',
   
      }}>
            <div className="container-header" >
               <div className="navbar">
            <div className="navbar__logo">
                <img src={logo} alt="" />
            </div>
            <label className="navbar__search">
                <input type="text" className="navbar__search__input" name="input" placeholder="Tìm truyện..."/>
                <div className="navbar__search__icon" >
                     <i class='bx bx-search'></i>
                </div>
            </label>
            <div className="navbar__controls">
                <div className="navbar__controls__toggle">
                    <ToogleButton onclick={()=> setdarkMode(true)}/>
                </div>
                <div className="navbar__controls__message">
                     <i class='bx bx-message-rounded'></i>
                </div>
            </div>
            <div className="navbar__account">
                <ul className="navbar__account__list">
                    <li>Đăng nhập /</li>
                    <li>Đăng ký</li>
                </ul>
            </div>
            </div>
            </div>

    </div>
    <div className="header__main">
        <div className="container-header">
            <div className="main-menu__list">
                
                {mainNav.map((item,index)=> 
                            

                        <div className={`main-menu__list__item ${index === activeNav ? 'active' : ''}`} key={index}>
                            <Link to = {item.path}>
                            {index ===0 ? <i className={item.display}></i> : `${item.display}` }
                             <span className="item-arrow">
                                <i className={item.icon}></i><i className={item.iconup}></i>
                                </span>
                            </Link>
                            {   index === 4 ? <LIstGenre /> : ''}
                            {   index === 5 ? <ListTop /> : ''}
                        </div>
                            
                            )}
            </div>
            <div className="main-menu__toolbar">
                <div className="main-menu__toolbar__icon">
                    <div className="main-menu__toolbar__icon-i">
                        i
                    </div>
                </div>
                <div className="main-menu__toolbar__desc">
                Nếu web/ảnh load chậm, TẢI NGAY ứng dụng VPN (1.1.1.1) tại đây để cải thiện tốc độ
                </div>
            </div>
         
        </div>
                          
                    
                            
                


    </div>
    </div>
  )
}

export default Header