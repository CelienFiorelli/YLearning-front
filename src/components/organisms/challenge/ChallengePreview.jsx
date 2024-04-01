import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import Base from "../Base";
import { createChallengeComplete, getChallenge, getChallengeCompletes, getChallengeReviews, getTechnologies } from "../../../services/challengeRequest";
import { useNavigate, useParams } from "react-router";
import { AiTwotoneExperiment } from "react-icons/ai";
import LevelBadge from '../../atoms/LevelBadge';
import { IoMdTime } from "react-icons/io";
import ReviewCard from "../../molecules/challenge/ReviewCard";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { GiPencil } from "react-icons/gi";
import Select from "react-select";

const ChallengePreview = () => {
    const { id } = useParams();
    const { token, userId } = useContext(AuthContext);
    const [challenge, setChallenge] = useState(null);
    const [challengeComplete, setChallengeComplete] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [technologies, setTechnologies] = useState([]);
    const [selectedTechnologie, setSelectedTechnologie] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token || !userId) return
        (async () => {
            const challengesRes = await getChallenge(id, token);
            setChallenge(challengesRes);
            const reviewsRes = await getChallengeReviews(id, token);
            setReviews(reviewsRes);
            const technologiesRes = await getTechnologies(token);
            setTechnologies(technologiesRes.map(t => {
                return {
                    label: t.name,
                    value: t.id
                }
            }));
            const challengeCompletesRes = await getChallengeCompletes(userId, token);
            setChallengeComplete(challengeCompletesRes.find(cc => cc.challenge.id == id))
        })();
    }, [token, userId])

    const startChallenge = async () => {
        const newChallengeComplete = await createChallengeComplete(selectedTechnologie, id, token);
        navigate(`/challenges/${newChallengeComplete.id}/complete`)
    }

    return (
        <Base>
            <div className="h-full flex mt-12 gap-4">
                {challenge && <div className="w-2/3">
                    <div className="flex">
                        <div className="w-32 h-32 rounded-md flex items-center justify-center border border-[#21D62D]">
                            <AiTwotoneExperiment size={32} color="#21D62D" opacity={0.5} />
                        </div>
                        <div className="flex flex-col ml-8 gap-2">
                            <div className="font-semibold text-slate-200 text-xl">Titre</div>
                            <div>
                                <div className="text-sm border text-white flex items-center gap-1 rounded-full px-2.5">
                                    <IoMdTime />
                                    Temps estimé
                                </div>
                            </div>
                            <div>
                                <LevelBadge level={challenge.level} />
                            </div>
                        </div>
                    </div>
                    <div className="border-1 border-b my-4 w-2/3 mx-auto"></div>
                    <div className="flex flex-col gap-8 items-center">
                        <div>
                            <div className="flex text-slate-200 font-semibold text-xl mb-1">
                                Problème à résoudre
                                <GiPencil />
                            </div>
                            <div className="text-justify bg-slate-100 text-slate-800 p-2 rounded-sm decoration-dotted underline decoration-1 underline-offset-4">
                                {challenge.description}
                            </div>
                        </div>
                        {challengeComplete ?
                            <>
                                {!challengeComplete.time &&
                                    <button className="flex items-center gap-2 bg-green-900 text-white px-3 py-1 rounded-md border border-green-800"
                                        onClick={() => navigate(`/challenges/${challengeComplete.id}/complete`)}>
                                        <MdOutlineContentPasteSearch />
                                        Continuer
                                    </button>}
                            </>
                            : <div className="flex gap-8 justify-center items-end">
                                <div>
                                    <div className="text-slate-200 mb-1">Avec quel langage voulez-vous faire ce challenge ?</div>
                                    <Select
                                        onChange={(t) => setSelectedTechnologie(t.value)}
                                        options={technologies}
                                        name="technologie"
                                        placeholder="Sélectionnez une technologie"
                                        className="outline-none"
                                    />
                                </div>
                                <div>
                                    <button className={`flex items-center gap-2 bg-green-900 text-white px-3 py-1 rounded-md border border-green-800 ${selectedTechnologie ? 'animate-bounce' : ''}`}
                                        onClick={() => startChallenge()}
                                        disabled={!selectedTechnologie}>
                                        <MdOutlineContentPasteSearch />
                                        Commencer
                                    </button>
                                </div>
                            </div>}
                    </div>
                </div>}
                <div className="w-1/3">
                    <div className="font-semibold text-white mb-4">Avis sur ce challenge :</div>
                    <div className="flex flex-col gap-2">
                        {reviews.map(r => {
                            return (
                                <ReviewCard review={r} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </Base>
    )
};

export default ChallengePreview;
