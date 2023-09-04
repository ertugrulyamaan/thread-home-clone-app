import { createContext, useState, useEffect } from 'react'
import { Thread } from "../types";
import { generateThreads } from "../utils/data";

export const ThreadsContext = createContext<Thread[]>([])


export const ThreadProvider = ({children}: any ) => {
    const [ threads, setThreads ] = useState<Thread[]>([])

    useEffect(() => {
      setThreads(generateThreads())
    }, [])
    

    return (
        <ThreadsContext.Provider value={threads}>
            {children}
        </ThreadsContext.Provider>
    )
}