"use client"
import { useAuth } from "@clerk/nextjs";
import { useState } from "react";


export const Counter = () => {
    const { isLoaded, userId } = useAuth()

    // const { isLoaded, isSignedIn, user } = useUser()
    
    console.log("Counter component");
    const [count, setCount] = useState(0);
    
    if(!isLoaded || !userId){
        return null;
    }

    // if(!isLoaded || !isSignedIn){
    //     return null;
    // }

    return(
        <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    );
};