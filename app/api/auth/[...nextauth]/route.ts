import {handlers} from "@/auth";
export const{GET, POST} = handlers;
export const runtime="edge";
export const authOptions = {
    session: {
        strategy: "jwt",
        maxAge: 0,
    },
};