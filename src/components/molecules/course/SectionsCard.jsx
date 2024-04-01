import React from "react";

export const SectionsCard = ({sections, index }) => {

    return (
        <div className="bg-[#606466] px-2 cursor-pointer">
            <div className="flex justify-between">
                <div className="font-semibold text-lg text-white">Chapitre {index}</div>
            </div>
            <div className="w-full flex">
                <div className="w-full text-clip overflow-hidden">
                    {sections.content}
                </div>
            </div>
        </div>
    );
};

export default SectionsCard
