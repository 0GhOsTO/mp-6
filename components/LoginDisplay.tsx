"use client";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import LoggingIn from "./LoggingInForm";

export default function LoginDisplay() {
    console.log("#2 Login Display");
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        fetch("/api/auth/session")
            .then(res => res.json())
            .then(data => {
            if(data?.user){
                router.push("/dashboard");
            }else {
                setLoading(false);
            }
        })
            .catch(() => {
                setLoading(false);
            })
    }, [])

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-white text-xl">Checking login status...</p>
            </div>
        );
    }

    return(
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
            <LoggingIn/>
        </div>
    );
}