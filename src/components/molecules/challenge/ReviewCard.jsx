import React from "react";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router";



export const ReviewCard = ({ review }) => {
    const navigate = useNavigate();

    return (
        <div className="bg-green-900 text-white border border-green-800 rounded-b-xl rounded-tr-xl p-2">
            <div className="flex gap-4 items-center">
                <CgProfile size={24}/>
                <div className="font-semibold">{review.challengeComplete.user.username}</div>
            </div>
            <div className="border-b border-green-800 my-2"></div>
            <div>{review.comment}</div>
        </div>
    );
};

export default ReviewCard
