"use client";
import {Button} from "@mui/material";

console.log("#3 Logging in LoggingInForm");

export default function LoggingIn() {
    return(
        <form className = "w-[96%] rounded-xl p-4 bg-blue-500 flex justify-center items-center">
            {/*<Button*/}
            {/*    variant = "contained"*/}
            {/*    color = "primary"*/}
            {/*    onClick = {() => window.location.href = "/api/auth/signin/"}*/}
            {/*>*/}
            {/*    Sign in with Google*/}
            {/*</Button>*/}
            <Button
                variant="contained"
                color="primary"
                onClick = {() => window.location.href = "/api/auth/signin/"}
            >
                Sign in with Github & Google
            </Button>
        </form>
    );
}