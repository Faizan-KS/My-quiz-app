'use client'

import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import React from "react";

type Props = {
    text: string
};

const SignInButton = ({text}: Props)=>{
    return(
        <Button onClick={()=>{
            signIn('google').catch(console.error);
        }}>{text}</Button>
    )
}
export default SignInButton