import { useEffect, createContext, useRef, useState } from "react"
import { io, Socket } from 'socket.io-client'

const WebSocketContext = createContext()

const WebSocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null)

    useEffect(() => {
        const newSocket = io("ws://localhost:5000")
        newSocket.on('connect', () => {
            console.log("connect");
        })

        newSocket.on('disconnect', () => {
            console.log("disconnect");
        })

        setSocket(newSocket)

        return () => {
            if (!socket) return;
            socket.off('connect')
            socket.off('disconnect')
            socket.off('chat')
        }
    }, [])

    return (
        <WebSocketContext.Provider value={{ socket }}>
            {children}
        </WebSocketContext.Provider>
    )
}

export { WebSocketContext, WebSocketProvider }