import { useState, useEffect } from 'react'

//creating own hook : A custom hook for showing onlinestatus functionality
// wrapping the useState and useEffect logic in a function  : useOnlineStatus
// Start the name of a custom hook by adding 'use' as prefix, always
export
    function useOnlineStatus() {
    const [isOnline, setOnline] = useState(true);

    useEffect(() => {
        const handleOnline = function () {
            setOnline(true)
        }

        const handleOffline = function () {
            setOnline(false)
        }

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.addEventListener('online', handleOnline);
            window.addEventListener('offline', handleOffline);

        }
    }, [])

    return isOnline;
}

// now we have our own custom hook - useOnlineStatus
//It can be called inside other components to implement online status functionality
// Earlier our components have repetative logic, now by using our custom hook, that
//logic will not look very repetative