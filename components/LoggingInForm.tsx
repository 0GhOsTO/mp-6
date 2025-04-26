"use client";
import {Button} from "@mui/material";
import {signInWithGoogle, signInWithGitHub} from "@/lib/useServer";

console.log("#3 Logging in LoggingInForm");

export default function LoggingIn() {
    return(
        <form className = "w-[96%] rounded-xl p-4 bg-blue-500 flex justify-center items-center">
            <Button
                sx={{
                    backgroundColor: "green",
                    margin: "1%",
                }}
                variant = "contained"
                color = "primary"
                onClick = {signInWithGitHub}
            >
                Sign in with GitHub
            </Button>
            <Button
                sx={{
                    backgroundColor: "red",
                    margin: "1%",
                }}
                variant="contained"
                color="primary"
                onClick = {signInWithGoogle}
            >
                Sign in with Google
            </Button>
        </form>
    );
}