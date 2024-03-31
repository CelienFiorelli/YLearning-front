import React from "react";
import footer from "../../icons/footer.svg";
import bottom_background from "../../icons/bottom_background.svg";
import top_background from "../../icons/top_background.svg";

export const Base = ({ children }) => {
  return (
    <div>
      <div className="h-screen">
        <div className="mb-8 w-full absolute" style={{ zIndex: '-1'}}>
          <img src={top_background} className="w-full" alt="footer-svg" />
        </div>
        {children}
      </div>
      <div>
        <img src={bottom_background} className="w-full" alt="footer-svg" />
      </div>
    </div>
  );
};
