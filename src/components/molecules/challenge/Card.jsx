import React from "react";
import { AiTwotoneExperiment } from "react-icons/ai";
import LevelBadge from '../../atoms/LevelBadge';
import { IoMdTime } from "react-icons/io";
import { useNavigate } from "react-router";


export const Card = ({ challenge }) => {
    const navigate = useNavigate();

    return (
        <div className="rounded-md bg-[#606466] border border-gray-400 px-2 cursor-pointer" onClick={() => navigate(`/challenges/${challenge.id}`)}>
            <div className="flex justify-between">
                <div className="font-semibold text-lg text-white">Titre</div>
                <div className="flex gap-2 items-center">
                    <div className="text-sm border text-white flex items-center gap-1 rounded-full px-2.5">
                        <IoMdTime />
                        Temps estimé
                    </div>
                    <LevelBadge level={challenge.level} />
                </div>
            </div>
            <div className="w-full flex gap-4 my-2">
                <div className="flex items-center">
                    <div className="w-20 h-20 rounded-md flex items-center justify-center border border-[#21D62D]">
                        <AiTwotoneExperiment size={32} color="#21D62D" opacity={0.5} />
                    </div>
                </div>
                <div className="w-full h-20 text-clip overflow-hidden">
                    {challenge.description}
                </div>
            </div>
        </div>
    );
};

export default Card
