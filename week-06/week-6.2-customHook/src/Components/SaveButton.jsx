import { useState, useEffect } from "react"
import { useOnlineStatus } from './customHookOnlineStatus'
export default function SaveButton() {
    // const [isOnline, setOnline] = useState(true);

    // useEffect(() => {
    //     const handleOnline = function () {
    //         setOnline(true)
    //     }

    //     const handleOffline = function () {
    //         setOnline(false)
    //     }

    //     window.addEventListener('online', handleOnline);
    //     window.addEventListener('offline', handleOffline);

    //     return () => {
    //         window.addEventListener('online', handleOnline);
    //         window.addEventListener('offline', handleOffline);

    //     }
    // }, [])

    //using custom hook for online status feature
    const isOnline = useOnlineStatus()

    function clickHandler() {
        console.log('Progress saved')
    }

    return (
        <button onClick={clickHandler} >{isOnline ? 'Save Progress' : 'Reconnecting...'}</button>
    )
}