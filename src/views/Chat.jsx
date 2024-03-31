import React, { useEffect, useState, useRef } from "react";
import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider";
import { createMessage, getConversations, getMessages } from "../services/messages";
import background from '../icons/background.svg'
import { IoMdAdd, IoMdSend } from "react-icons/io";
import { SideBar } from "./SideBar";
import Message from "../components/chat/Message";
import { Avatar } from "../components/chat/Avatar";
import { WebSocketContext } from "./WebSocketProvider";


const Chat = () => {
  const { token } = useContext(AuthContext);
  const [conversations, setConversations] = useState([]);
  const [currentConversation, setCurrentConversation] = useState({});
  const [messages, setMessages] = useState([]);
  const [messageBoundary, setMessageBoundary] = useState({ first: null, last: null });
  const [messageIsLoading, setMessageIsLoading] = useState(false);
  const [messageContent, setMessageContent] = useState([]);
  const messageInputRef = useRef(null);
  const { socket } = useContext(WebSocketContext)

  const selectConversation = async (conversation) => {
    setCurrentConversation(conversation);
    const messagesData = await getMessages(conversation.id, token)
    setMessages(messagesData.messages);
    setMessageBoundary({ first: messagesData.firstMessageId, last: messagesData.lastMessageId })
  }
  
  const sendMessage = async () => {
    if (!messageContent) return;
    await createMessage(messageContent, currentConversation.id, token)
    setMessageContent('');
    messageInputRef.current.focus();  
  }

  const textAreaPress = (e) => {
      if(e.keyCode == 13 && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
  }

  const handleScroll = async (e) => {
    if (messages[messages.length - 1].id != messageBoundary.first && !messageIsLoading && e.target.scrollHeight - e.target.clientHeight - Math.abs(e.target.scrollTop) < 500) {
      setMessageIsLoading(true)
      const nextMessages = await getMessages(currentConversation.id, token, {beforeMessageId: messages[messages.length - 1].id})
      
      setMessageBoundary({ first: nextMessages.firstMessageId, last: nextMessages.lastMessageId })
      setMessages((messages) => {
        messages.splice(0, messages.length + nextMessages.messages.length - 100)
        return [...messages, ...nextMessages.messages]
      })
      setMessageIsLoading(false)
    }
    else if (messages[0].id != messageBoundary.last && !messageIsLoading && Math.abs(e.target.scrollTop) < 500) {
      setMessageIsLoading(true)
      const nextMessages = await getMessages(currentConversation.id, token, {afterMessageId: messages[0].id})
      setMessageBoundary({ first: nextMessages.firstMessageId, last: nextMessages.lastMessageId })

      setMessages((messages) => {
        messages.splice(100 - nextMessages.messages.length)
        return [...nextMessages.messages, ...messages]
      })
      setMessageIsLoading(false)
    }
  }

  const timestampFormat = (date) => {
    const today = new Date();

    if (date.toLocaleString('fr', { dateStyle: 'short' }) == today.toLocaleString('fr', { dateStyle: 'short' })) {
      return "Aujourd'hui";
    } else if (date.toLocaleString('fr', { dateStyle: 'short' }) == new Date(today - 24 * 60 * 60 * 1000).toLocaleString('fr', { dateStyle: 'short' })) {
      return "Hier";
    } else {
      return date.toLocaleString('fr', { hour12: false, dateStyle: "short" });
    }
  }

  useEffect(() => {
    (async () => {
      if (token && socket) {
        const fetchConversations = await getConversations(token);
        setConversations(fetchConversations);
        selectConversation(fetchConversations[0])

        socket.on('message', ({ type, data }) => {
          switch (type) {
            case 'create':
              data.created_at = new Date(data.created_at)
              data.updated_at = new Date(data.updated_at)
              setMessages((messages) => [data, ...messages])
              break;
            case 'edit':
              setMessages((messages) => messages.map(m => {
                if (m.id === data.id) {
                  m = data
                  m.created_at = new Date(m.created_at)
                  m.updated_at = new Date(m.updated_at)
                }
                return m
              }))
              break;
            case 'delete':
              setMessages((messages) => messages.filter(m => m.id != data.id))
              break;
          }
        })
      }
    })();
  }, [token, socket])

  return (
    <div className="h-screen flex justify-end" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}>
      <div className="relative ml-2 my-1" style={{ height: 'calc(100% - 8px)', width: 72 }}>
        <SideBar/>
      </div>
      <div className="h-full mx-2 backdrop-blur-sm" style={{ height: 'calc(100% - 8px)', width: 'calc(100% - 96px)' }}>
        <div className="flex items-center h-16 gap-2">
          <div className="w-full overflow-x-scroll flex gap-2 items-center">
            {conversations.map(conversation => {
              return (
                <div key={conversation.id} className="min-w-40 flex items-center cursor-pointer bg-[#2121217F] rounded-md p-2 gap-2 text-white" onClick={() => selectConversation(conversation)}>
                  <div className="flex justify-center">
                    <Avatar avatarUrl={null} size={10} />
                  </div>
                  <div className="text-sm">{conversation.firstname} {conversation.lastname}</div>
                </div>
              )
            })}
          </div>
          <div>
            <div className="bg-[#21D62D] text-white cursor-pointer w-12 h-12 flex items-center justify-center rounded-full">
              <IoMdAdd size={26} />
            </div>
          </div>
        </div>
        <div style={{ height: 'calc(100vh - 4.25rem)' }}>
          {messages &&
            <div className="h-full bg-[#2121217F] p-2 rounded-md">
              <div onScroll={handleScroll} style={{ height: 'calc(100% - 3.5rem)' }} className="overflow-y-scroll flex-col-reverse w-full flex flex-col pb-2">
                {messages.map((message, i) => {
                  return (
                    <div key={message.id}>
                      {(i == messages.length - 1 || (i <= messages.length - 1 && message.created_at.toLocaleString('fr', { hour12: false, dateStyle: "short" }) != messages[i + 1].created_at.toLocaleString('fr', { hour12: false, dateStyle: "short" }))) &&
                      <div className="flex items-center text-white gap-4 my-2">
                        <div className="w-full h-px border-b border-white"></div>
                        <div>{timestampFormat(message.created_at)}</div>
                        <div className="w-full h-px border-b border-white"></div>
                      </div>}
                      <Message message={message}
                        withAvatar={(i == messages.length - 1 || (i <= messages.length - 1 && message.sender.id != messages[i + 1].sender.id) || message.created_at.toLocaleString('fr', { hour12: false, dateStyle: "short" }) != messages[i + 1].created_at.toLocaleString('fr', { hour12: false, dateStyle: "short" }))}
                        isCurrentUser={message.receiver.id == currentConversation.id} />
                    </div>
                  )
                })}
              </div>
              <div className="h-14 pt-2">
                <div className="bg-black/25 w-full h-full rounded-sm px-8 py-1 flex">
                  <textarea ref={messageInputRef} autoFocus onKeyDown={textAreaPress} value={messageContent} onChange={e => setMessageContent(e.target.value)} className="bg-transparent w-full resize-none outline-none text-white"></textarea>
                  <button className="bg-[#21D62D] text-white px-4 rounded-lg" onClick={sendMessage}>
                    <IoMdSend size={26} />
                  </button>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Chat;
