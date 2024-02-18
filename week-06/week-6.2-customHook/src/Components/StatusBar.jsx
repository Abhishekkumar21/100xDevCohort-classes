//creat a component which will have logic to warn the user if their network connection
//has accidentaly gone off while they are using your app.

//Two things will be required :
//1. A state that tracks whether network is online
//2. An effect that subscribes to the global online and oggline events and updates that state

import { useState, useEffect } from 'react'
import { useOnlineStatus } from './customHookOnlineStatus'

export default function StatusBar() {
    // const [isOnline, setOnline] = useState(true);

    // useEffect(() => {
    //     const handleOnline = function () {
    //         setOnline(true)
    //     }

    //     const handleOffline = function () {
    //         setOnline(falase)
    //     }

    //     window.addEventListener('online', handleOnline);
    //     window.addEventListener('offline', handleOffline);

    //     return () => {
    //         window.addEventListener('online', handleOnline);
    //         window.addEventListener('offline', handleOffline);

    //     }
    // }, [])

    const isOnline = useOnlineStatus()
    return (
        <p>{isOnline ? "Online ✅" : "disconnected ❌"}</p>
    )
}


// use the above same logic in a different component. You want to
// implement a Save button that will become disableed and show "Reconnecting"
// instead of "Save" while network in off