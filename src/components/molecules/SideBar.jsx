import React, { useState } from "react";
import { FaBookBookmark } from "react-icons/fa6";
import { AiTwotoneExperiment } from "react-icons/ai";
import { MdOutlineSettings } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import SidebarItem from "../atoms/sidebar/SidebarItem";

export const SideBar = () => {
  const [isDeploy, setIsDeploy] = useState()


  return (
    <div className="absolute bg-[#687074] rounded-r-md z-50 h-full ease-in duration-100 border-r" onMouseLeave={() => setIsDeploy(false)} onMouseEnter={() => setIsDeploy(true)} style={{ width: isDeploy ? 200 : 54 }}>
      <div className="h-full flex flex-col justify-between px-4 py-8 text-white text-md">
        <div className="flex flex-col gap-12 mt-16">
          <SidebarItem name={"Cours"} icon={<FaBookBookmark size={20} />} route={"/courses"} isDeploy={isDeploy} />
          <SidebarItem name={"Challenge"} icon={<AiTwotoneExperiment size={20} />} route={"/challenges"} isDeploy={isDeploy} />
        </div>
        <div className="flex flex-col gap-12">
          <SidebarItem name={"Paramètres"} icon={<MdOutlineSettings size={20} />} isDeploy={isDeploy} />
          <SidebarItem name={"Mon compte"} icon={<CgProfile size={20} />} route={"/profile"} isDeploy={isDeploy} />
        </div>
      </div>
    </div>
  );
};
