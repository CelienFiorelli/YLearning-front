import React, { useRef, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../components/AuthProvider";
import { FaPen, FaTrash, FaReply, FaCheck } from "react-icons/fa";
import { BsFillPinAngleFill } from "react-icons/bs";
import { deleteMessage, editMessage } from "../../services/messages";
import { Avatar } from "./Avatar";

export const Message = ({ message, withAvatar, isCurrentUser }) => {
  const { token } = useContext(AuthContext);
  const [isHover, setIsHover] = useState(false)
  const [isEditable, setIsEditable] = useState(false)
  const messageContentRef = useRef(null)

  const timestampFormat = (date) => {
    const today = new Date();

    if (date.toLocaleString('fr', { dateStyle: 'short' }) == today.toLocaleString('fr', { dateStyle: 'short' })) {
      return `Aujourd'hui à ${date.toLocaleString('fr', { hour12: false, hour: "2-digit", minute: "2-digit" })}`;
    } else if (date.toLocaleString('fr', { dateStyle: 'short' }) == new Date(today - 24 * 60 * 60 * 1000).toLocaleString('fr', { dateStyle: 'short' })) {
      return `Hier à ${date.toLocaleString('fr', { hour12: false, hour: "2-digit", minute: "2-digit" })}`;
    } else {
      return date.toLocaleString('fr', { hour12: false, dateStyle: "short", timeStyle: "short" });
    }
  }

  const editMessageAction = async (e) => {
    if (e.keyCode == 13 && !e.shiftKey) {
      e.preventDefault();
      await saveEdit()
    } else if (e.keyCode == 27) {
      messageContentRef.current.innerText = message.content
      setIsEditable(false)
    }
  }

  const saveEdit = async () => {
    setIsEditable(false)
    if (messageContentRef.current.innerText === message.content) return;
    await editMessage(token, message.id, { content: messageContentRef.current.innerText })
  }

  const deleteMessageAction = async () => {
    await deleteMessage(token, message.id)
  }

  return (
    <div className={`w-full flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex gap-2 ${isCurrentUser ? 'flex-row-reverse' : ''}`}>
        {withAvatar ?
          <Avatar avatarUrl={null} size={12} />
          :
          <div className="w-12 h-12"></div>
        }
        <div className="relative w-4/5 min-w-36" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
          <div key={message.id} className={`p-2 mt-2 text-white rounded-b-md ${isCurrentUser ? 'bg-[#21D62D] rounded-tl-md' : 'bg-[#595959] rounded-tr-md'} ${isEditable ? 'bg-[#0CC11D]' : ''}`}>
            <div contentEditable={isEditable} className="outline-none whitespace-pre-wrap" onKeyDown={editMessageAction} ref={messageContentRef}>
              {message.content}
            </div>
            <div className={`text-[10px] text-slate-200 w-full mt-1 flex ${isCurrentUser ? 'justify-start' : 'justify-end'}`}>
              {timestampFormat(message.created_at)}{message.created_at.getTime() !== message.updated_at.getTime() && ' - modifié'}
            </div>
          </div>
          {isHover && isCurrentUser &&
            <div className="absolute -bottom-2 text-slate-200 flex shadow rounded-md border right-2 bg-[#21D62D] border-[#0CC11D]">
              {!isEditable ?
                <>
                  <div className="p-1 hover:bg-[#0CC11D] cursor-pointer" onClick={() => setIsEditable(!isEditable)}>
                    <FaPen />
                  </div>
                  <div className="p-1 hover:bg-[#0CC11D] cursor-pointer">
                    <FaReply />
                  </div>
                  <div className="p-1 hover:bg-[#0CC11D] cursor-pointer">
                    <BsFillPinAngleFill />
                  </div>
                  <div className="p-1 hover:bg-[#0CC11D] cursor-pointer" onClick={deleteMessageAction}>
                    <FaTrash />
                  </div>
                </>
                :
                <div className="p-1 hover:bg-[#0CC11D] cursor-pointer" onClick={saveEdit}>
                  <FaCheck />
                </div>
              }
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Message
