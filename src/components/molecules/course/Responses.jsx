import React from "react";

export const ResponseSection = ({ responses, index }) => {

  return (
    <div onClick={() => console.log(index, responses.content)} className="px-6 mb-4 w-full rounded-full border bg-[#606466] cursor-pointer flex justify-between">
      <div className="font-semibold text-md text-white my-2 align-center"><li>{index}</li></div>
      <div className="px-2 w-full text-clip overflow-hidden my-2">
        {responses.content + responses.id}
      </div>
    </div>
  );
};

export default ResponseSection;
