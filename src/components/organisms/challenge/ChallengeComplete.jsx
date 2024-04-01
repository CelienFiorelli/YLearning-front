import React, { useContext, useEffect, useState } from "react";
import Base from "../Base";
import { finishChallenge, getChallengeComplete, updateChallengeComplete } from "../../../services/challengeRequest";
import { Navigate, useNavigate, useParams } from "react-router";
import { AuthContext } from "../AuthProvider";
import Editor from '@monaco-editor/react';
import { FaSave } from "react-icons/fa";
import { FaFlagCheckered } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";

export const ChallengeComplete = () => {
    const { id } = useParams();
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();
    const [challengeComplete, setChallengeComplete] = useState(null);
    const [response, setResponse] = useState(null);
    const [savedResponse, setSavedResponse] = useState(null);
    const [savePending, setSavePending] = useState(false);

    useEffect(() => {
        if (!token) return
        (async () => {
            const res = await getChallengeComplete(id, token);
            setChallengeComplete(res);
            setSavedResponse(res.response);
            setResponse(res.response);
        })();
    }, [token])

    const saveResponse = () => {
        setSavePending(true)
        updateChallengeComplete(id, response, token).then(() => {
            setSavePending(false);
            setSavedResponse(response);
        })
    }

    const saveResponseWithKey = (event) => {
        if (event.ctrlKey && event.key === 's') {
            event.preventDefault();
            saveResponse();
        }
    }
    
    const validateChallenge = async () => {
        await finishChallenge(id, token);
        navigate('/dashboard');
    }


    return (
        <Base>
            {challengeComplete && <div className="h-full flex mt-12 gap-4">
                <div className="w-2/3">
                    <div className="flex justify-between mb-2">
                        <div className="text-slate-200 font-semibold text-xl">Titre</div>
                        <div className="flex items-end gap-2">
                            {response !== savedResponse && <div className="text-slate-400 text-xs">Changement non enregistré</div>}
                            <button className="bg-green-900 text-white px-3 py-1 rounded-md border border-green-800" onClick={() => saveResponse()}>
                                {savePending ?
                                    <ImSpinner2 className="animate-spin" /> : <FaSave />
                                }
                            </button>
                        </div>
                    </div>
                    <div onKeyDown={(e) => saveResponseWithKey(e)}>
                        <Editor height="90vh" onChange={(e) => setResponse(e)} defaultLanguage={challengeComplete.technologie.name.toLowerCase()} defaultValue={response} theme="vs-dark" />;
                    </div>
                </div>
                <div className="w-1/3">
                    <div className="text-justify bg-slate-100 text-slate-800 p-2 rounded-sm decoration-dotted underline decoration-1 underline-offset-4">
                        {challengeComplete.challenge.description}
                    </div>
                    <div className="flex justify-center mt-4">
                        <button className="flex items-center gap-2 bg-green-900 text-white px-3 py-1 rounded-md border border-green-800"
                                onClick={() => validateChallenge()}>
                            <FaFlagCheckered />
                            Envoyer
                        </button>
                    </div>
                </div>
            </div>}
        </Base>
    );
};

export default ChallengeComplete
