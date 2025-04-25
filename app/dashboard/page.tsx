import {auth} from "@/auth";
import Link from "next/link";

export default async function Dashboard(){
    const state = await auth();
    if(!state?.user){
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-xl font-semibold text-red-600">
                    Unauthorized. Please sign in.
                </p>
            </div>
        );
    }
    console.log("state", state);
    const {name, email, image} = state.user;
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">Welcome to Your Dashboard</h1>
            {image && (
                <img
                    src={image}
                    alt="Profile Picture"
                    width={128}
                    height={128}
                    className="rounded-full shadow-md"
                />
            )}
            <p className="mt-4 text-lg font-medium">{name}</p>
            <p className="text-gray-600">{email}</p>

            <Link
                href="/api/auth/signout"
                className="mt-6 text-red-500 underline text-sm"
            >
                Sign out
            </Link>
        </div>
    );


}