import React from "react";
import { userActive } from "../../icons/sidebar";

export const Avatar = ({ avatarUrl, size }) => {
  return (
    <div className={`w-${size} h-${size} rounded-full bg-[#595959]`}>
        <img src={avatarUrl || userActive} className="w-full h-full rounded-full" />
    </div>
  );
};
