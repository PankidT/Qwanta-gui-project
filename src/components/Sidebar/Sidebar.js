import { React, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  Link } from 'react-router-dom';

import { 
    faCoffee,
    faArrowAltCircleLeft, } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {

    const [open, setOpen] = useState(true)

    const Menus = [
        { title: "Dashboard", icon: "Chart_fill", route: "/" },
        { title: "Experiment", icon: "Chat", route: "/experiment", gap: true },
        { title: "Lab", icon: "User", route: "/lab" },
        { title: "Account", icon: "Calendar", route: "/account", gap:true },
        { title: "Setting", icon: "Search", route: "setting" },
        { title: "Logout", icon: "Folder", route: "/logout" },
    ]

    return (
        <div className='flex'>
            <div className={`${open ? 'w-72' : 'w-20'} relative duration-300 h-screen p-5 pt-8 bg-[#262626]`}>

                <FontAwesomeIcon 
                    icon={faArrowAltCircleLeft} 
                    className={`absolute cursor-pointer rounded-full h-7
                        -right-3 top-9 w-7 text-white ${!open && 'rotate-180'}`}
                    onClick={()=>setOpen(!open)}>
                </FontAwesomeIcon>

                <div className='flex gap-x-4 items-center'>
                    <FontAwesomeIcon 
                        icon={faCoffee} 
                        className={`cursor-pointer duration-500 text-white ${!open && 'rotate-[360deg]'}`}
                        onClick={()=>setOpen(!open)}>
                    </FontAwesomeIcon>

                    <h1 
                        className={`text-white orgin-left font-medium text-xl duration-200 ${!open && 'scale-0'}`}>
                            Qwanta
                    </h1>
                </div>
                <ul className='pt-6'>
                    {Menus.map((menu, index)=>(
                        <li key={index} 
                            className={`text-gray-300 text-sm flex items-center gap-x-4 
                                cursor-pointer p-2 hover:bg-light-white rounded-md 
                                ${menu.gap ? 'mt-9' : 'mt-2'} ${index === 0 && 'bg-light-white'}`}>

                                <img src={`./src/assets/${menu.icon}.png`} />
                                <span className={`${!open && 'hidden'} origin-left duration=200`}>
                                    <Link to={menu.route}> {menu.title} </Link>
                                </span>
                                
                        </li>
                    ))}
                </ul>
            </div>
            
        </div>
    )
}

export default Sidebar