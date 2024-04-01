import React from "react";
import { FaBookReader } from "react-icons/fa";
import { useNavigate } from "react-router";
import { getSectionResponses } from "../../../services/courseRequest";

export const ResponseSection = ({ responses, index }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full border bg-[#606466] px-2 cursor-pointer flex justify-between">
      <div className="font-semibold text-lg text-white my-2 align-center">{index}</div>
      <div className="w-full text-clip overflow-hidden my-2 align-center">
        {responses.content}
      </div>
    </div>
  );
};

export default ResponseSection;
