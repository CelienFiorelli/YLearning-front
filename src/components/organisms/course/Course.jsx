import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import Base from "../Base";
import { getCourses } from "../../../services/courseRequest";
import CourseCard from "../../molecules/course/Card";

const Course = () => {
  const { token } = useContext(AuthContext);
  const [course, setCourses] = useState([]);

  useEffect(() => {
    if (!token) return
    (async () => {
      const res = await getCourses(token)
      setCourses(res);
    })();
  }, [token])

  return (
    <Base>
      <div className="h-full">
        <div className="text-2xl font-medium my-12 text-white">
          Cours disponibles
        </div>
        <div className="grid grid-cols-2 gap-4 mb-32">
          {course.map(c => {
            return (
              <CourseCard course={c} />
            )
          })}
        </div>
      </div>
    </Base>
  )
};

export default Course;
