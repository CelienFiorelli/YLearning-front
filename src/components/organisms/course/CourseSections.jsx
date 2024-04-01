import React, { useContext, useEffect, useState } from "react";
import Base from "../Base";
import {
  getCourseSections,
} from "../../../services/courseRequest";
import { useParams } from "react-router";
import { AuthContext } from "../AuthProvider";
import SectionsCard from "../../molecules/course/SectionsCard";
import ResponseSection from "../../molecules/course/Responses";

export const CourseSections = () => {
  const { id } = useParams();
  const { token } = useContext(AuthContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!token) return;
    (async () => {
      const res = await getCourseSections(id, token);
      console.log(res)
      setData(res);
    })();
  }, [token]);

  return (
    <Base>
      <div className="h-full">
        <div className="text-2xl font-medium my-12 text-white">
          Contenu du cours :
        </div>
        <div className="w-3/4 border my-12 gap-4 mb-32">
          {data &&
            data.sections.map((s, i) => {
              return (
                <div className="bg-[#606466]">
                  <SectionsCard sections={s} index={i + 1} />
                  <label htmlFor="" className="px-4 font-semibold text-md text-white"> Mise en pratique :</label>
                  <div className="px-4 w-full grid grid-cols-2">
                    {data.responses.map((r, i) => {
                      return <ResponseSection responses={r} index={i + 1} />;
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </Base>
  );
};

export default CourseSections;
