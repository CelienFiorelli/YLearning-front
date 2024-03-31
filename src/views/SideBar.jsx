import React, { useState } from "react";
import { home, menu, message, parameter, search, user, homeActive, menuActive, messageActive, parameterActive, searchActive, userActive } from "../icons/sidebar";
import { useNavigate } from 'react-router'

export const SideBar = () => {
  const navigate = useNavigate();
  const [isDeploy, setIsDeploy] = useState()
  const [hover, setHover] = useState()


  return (
    <div className="absolute bg-[#595959] rounded-md z-50 h-full ease-in duration-100" onMouseLeave={() => setIsDeploy(false)} onMouseEnter={() => setIsDeploy(true)} style={{ width: isDeploy ? 200 : 72 }}>
      <div className="h-full flex flex-col justify-between px-4 py-8 text-white">
        <div className="flex flex-col gap-12">
          <div className="cursor-pointer flex gap-4 items-center" onClick={() => navigate('/dashboard')} onMouseEnter={() => setHover('home')} onMouseLeave={() => setHover(null)}>
            <img src={hover === 'home' ? homeActive : home} />
            <div className={`overflow-x-hidden text-nowrap ${isDeploy ? 'display': 'hidden'} ${hover === 'home' ? 'text-[#21D62D]':''}`}>Accueil</div>
          </div>
          <div className="cursor-pointer flex gap-4 items-center" onMouseEnter={() => setHover('search')} onMouseLeave={() => setHover(null)}>
            <img src={hover === 'search' ? searchActive : search} />
            <div className={`overflow-x-hidden text-nowrap ${isDeploy ? 'display': 'hidden'} ${hover === 'search' ? 'text-[#21D62D]':''}`}>Recherche</div>
          </div>
          <div className="cursor-pointer flex gap-4 items-center" onClick={() => navigate('/chat')} onMouseEnter={() => setHover('message')} onMouseLeave={() => setHover(null)}>
            <img src={hover === 'message' ? messageActive : message} />
            <div className={`overflow-x-hidden text-nowrap ${isDeploy ? 'display': 'hidden'} ${hover === 'message' ? 'text-[#21D62D]':''}`}>Messagerie</div>
          </div>
          <div className="cursor-pointer flex gap-4 items-center" onClick={() => navigate('/profil')} onMouseEnter={() => setHover('user')} onMouseLeave={() => setHover(null)}>
            <img src={hover === 'user' ? userActive : user} />
            <div className={`overflow-x-hidden text-nowrap ${isDeploy ? 'display': 'hidden'} ${hover === 'user' ? 'text-[#21D62D]':''}`}>Mon profil</div>
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <div className="cursor-pointer flex gap-4 items-center" onMouseEnter={() => setHover('parameter')} onMouseLeave={() => setHover(null)}>
            <img src={hover === 'parameter' ? parameterActive : parameter} />
            <div className={`overflow-x-hidden text-nowrap ${isDeploy ? 'display': 'hidden'} ${hover === 'parameter' ? 'text-[#21D62D]':''}`}>Paramètres</div>
          </div>
          <div className="cursor-pointer flex gap-4 items-center" onMouseEnter={() => setHover('menu')} onMouseLeave={() => setHover(null)}>
            <img src={hover === 'menu' ? menuActive : menu} />
            <div className={`overflow-x-hidden text-nowrap ${isDeploy ? 'display': 'hidden'} ${hover === 'menu' ? 'text-[#21D62D]':''}`}>A propos</div>
          </div>
        </div>
      </div>
    </div>
  );
};
