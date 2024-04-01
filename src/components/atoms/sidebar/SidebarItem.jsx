import React, { useState } from "react";
import { useNavigate } from "react-router";

export const SidebarItem = ({ icon, name, route, isDeploy }) => {
    const navigate = useNavigate();
    const [isHover, setHover] = useState(false);

    return (
        <div className="cursor-pointer flex gap-4 items-center" onClick={() => navigate(route)}  onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {icon}
            <div className={`overflow-x-hidden text-nowrap ${isDeploy ? 'display' : 'hidden'} ${isHover ? 'text-[#21D62D]' : ''}`}>
                {name}
            </div>
        </div>
    );
};

export default SidebarItem
