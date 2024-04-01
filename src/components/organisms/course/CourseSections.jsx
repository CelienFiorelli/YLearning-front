import React, { useContext, useEffect, useState } from "react";
import Base from "../Base";
import {
  getCourseSections,
  getSectionResponses,
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
      setData(res);
    })();
  }, [token]);

  return (
    <Base>
      <div className="h-full">
        <div className="text-2xl font-medium my-12 text-white">
          Les sections :
        </div>
        <div className="w-3/4 border my-12 gap-4 mb-32">
          {data &&
            data.sections.map((s, i) => {
              return (
                <div>
                  <SectionsCard sections={s} index={i + 1} />
                  <label htmlFor="" className="font-semibold text-lg text-white"> Mise en pratique :</label>
                  <div className="w-full grid grid-cols-2">
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
