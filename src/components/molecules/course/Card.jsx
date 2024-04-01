import React from "react";
import { FaBookReader } from "react-icons/fa";
import LevelBadge from '../../atoms/LevelBadge';
import { IoMdTime } from "react-icons/io";
import { useNavigate } from "react-router";


export const CourseCard = ({ course }) => {
    const navigate = useNavigate();

    return (
        <div className="rounded-md bg-[#606466] border border-gray-400 px-2 cursor-pointer" onClick={() => navigate(`/courses/${course.id}/sections`)}>
            <div className="flex justify-between">
                <div className="font-semibold text-lg text-white">Titre</div>
                <div className="flex gap-2 items-center">
                    <LevelBadge level={course.level} />
                </div>
            </div>
            <div className="w-full flex gap-4 my-2">
                <div className="flex items-center">
                    <div className="w-20 h-20 rounded-md flex items-center justify-center border border-[#21D62D]">
                        <FaBookReader size={32} color="#21D62D" opacity={0.5} />
                    </div>
                </div>
                <div className="w-full inline-block align-middle text-center h-20 text-clip overflow-hidden">
                    {course.title}
                </div>
            </div>
        </div>
    );
};

export default CourseCard
