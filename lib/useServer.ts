"use server";
import {signIn} from "@/auth";

export async function signInWithGitHub(){
    console.log("signInWithGitHub() called");
    await signIn("github");
}
export async function signInWithGoogle(){
    console.log("signInWithGoogle() called");
    await signIn("google");
}