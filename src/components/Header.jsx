import React from 'react'
import logo from '../assets/images/logo.png'
import ToogleButton from './ToogleButton'
import { Link } from 'react-router-dom'
const Header = () => {
    const mainNav = [
       
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
             icon: "bx bxs-down-arrow"
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
  return (
      <div className="header">
    <div className="header__bar "  style={{ 

        
        backgroundImage: `url("http://s.nettruyengo.com/Data/Sites/1/skins/comic/images/bg_header_2017.jpg") `,
        backgroundRepeat :  'no-repeat',
        backgroundPosition : 'top center',
   
      }}>
            <div className="container-header">
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
                    <ToogleButton />
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
                <div className="main-menu__list__item icon-home">
                <Link to = "/">
                <i class='bx bx-home'></i>
                </Link>

                </div>
                {mainNav.map((item,index)=> 
                        <div className="main-menu__list__item" key={index}>
                            <Link to = {item.path}>
                            {`${item.display}` }
                             <span className="item-arrow">
                                <i className={item.icon}></i><i className={item.iconup}></i>
                                </span>
                            </Link>
                        </div>
                )}

            </div>

        </div>
    </div>
    </div>
  )
}

export default Header