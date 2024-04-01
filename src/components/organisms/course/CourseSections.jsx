import React, { useContext, useEffect, useState } from "react";
import Base from "../Base";
import { getCourseSections } from "../../../services/courseRequest";
import { useParams } from "react-router";
import { AuthContext } from "../AuthProvider";
import SectionsCard from "../../molecules/course/SectionsCard";
import ResponseSection from "../../molecules/course/Responses";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CourseSections = () => {
  const { id } = useParams();
  const { token } = useContext(AuthContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!token) return;
    (async () => {
      const res = await getCourseSections(id, token);
      setData(res);
    })();
  }, [token]);

  const succes = () => {
    toast.success(`Bonne réponse !`);
  };
  const missed = (username) => {
    toast.error(`Mauvaise réponse !`);
  };

  return (
    <Base>
      <div className="h-full">
        <div className="text-2xl font-medium my-12 text-white">
          Contenu du cours :
        </div>
        <div className="w-3/4 border my-12 gap-4 mb-32">
          {data &&
            data.map((sectionData, index) => (
              <div className="bg-[#606466]" key={index}>
                <SectionsCard
                  sections={sectionData.section}
                  index={index + 1}
                />
                <label
                  htmlFor=""
                  className="px-4 font-semibold text-md text-white"
                >
                  Mise en pratique :
                </label>
                <div className="px-4 w-full grid grid-cols-2">
                  {sectionData.responses.map((response, i) => (
                    <ResponseSection
                      key={i}
                      responses={response}
                      index={i + 1}
                      onClick={() => response.isValid ? succes() : missed()}
                    />
                  ))}
                </div>
              </div>
            ))}
        </div>
        <div className="absolute">
          <ToastContainer />
        </div>
      </div>
    </Base>
  );
};

export default CourseSections;
