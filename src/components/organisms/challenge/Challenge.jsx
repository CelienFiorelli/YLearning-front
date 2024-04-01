import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import Base from "../Base";
import { getChallenges } from "../../../services/challengeRequest";
import Card from "../../molecules/challenge/Card";

const Challenge = () => {
  const { token } = useContext(AuthContext);
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    if (!token) return
    (async () => {
      const res = await getChallenges(token)
      setChallenges(res);
    })();
  }, [token])

  return (
    <Base>
      <div className="h-full">
        <div className="text-2xl font-medium my-12 text-white">
          Challenges disponibles :
        </div>
        <div className="grid grid-cols-2 gap-4 mb-32">
          {challenges.map(c => {
            return (
              <Card challenge={c} />
            )
          })}
        </div>
      </div>
    </Base>
  )
};

export default Challenge;
