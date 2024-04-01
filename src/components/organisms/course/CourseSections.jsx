import React, { useContext, useEffect, useState } from "react";
import Base from "../Base";
import { getCourseSections } from "../../../services/courseRequest";
import { useParams } from "react-router";
import { AuthContext } from "../AuthProvider";
import SectionsCard from "../../molecules/course/SectionsCard";


export const CourseSections = () => {
    const { id } = useParams();
    const { token } = useContext(AuthContext);
    const [sections, setSections] = useState(null);

    useEffect(() => {
        if (!token) return
        (async () => {
            const res = await getCourseSections(id, token);
            setSections(res);
        })();
    }, [token])

    return (
        <Base>
        <div className="h-full">
          <div className="text-2xl font-medium my-12 text-white">
            Les sections :
          </div>
          <div className="grid grid-cols-2 gap-4 mb-32">
            {sections && sections.map(s => {
              return (
                <SectionsCard sections={s} />
              )
            })}
          </div>
        </div>
      </Base>
    );
};

export default CourseSections
