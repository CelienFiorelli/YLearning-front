import React from "react";
import { FaBookReader } from "react-icons/fa";
import { useNavigate } from "react-router";


export const SectionsCard = ({ sections }) => {
    const navigate = useNavigate();

    return (
        <div className="rounded-md bg-[#606466] border border-gray-400 px-2 cursor-pointer">
            <div className="flex justify-between">
                <div className="font-semibold text-lg text-white">Titre</div>
            </div>
            <div className="w-full flex gap-4 my-2">
                <div className="flex items-center">
                    <div className="w-20 h-20 rounded-md flex items-center justify-center border border-[#21D62D]">
                        <FaBookReader size={32} color="#21D62D" opacity={0.5} />
                    </div>
                </div>
                <div className="w-full h-20 text-clip overflow-hidden">
                    {sections.content}
                </div>
            </div>
        </div>
    );
};

export default SectionsCard
